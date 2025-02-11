import { useCallback } from 'react'
import { useToast } from '@/app/components/ui/use-toast'
import { errorLogger } from '@/app/utils/error-logger'
import { TypedError, ErrorSeverity, ErrorMetadata } from '@/app/utils/error-types'

interface ErrorHandlerOptions {
  showToast?: boolean
  severity?: ErrorSeverity
  context?: Record<string, unknown>
}

export function useErrorHandler(defaultOptions: ErrorHandlerOptions = {}) {
  const { toast } = useToast()

  const handleError = useCallback(
    (error: Error | TypedError, options: ErrorHandlerOptions = {}) => {
      const { showToast = true, severity, context } = { ...defaultOptions, ...options }

      // Log the error
      errorLogger.log(error, severity, context)

      // Show toast if enabled
      if (showToast) {
        const metadata: ErrorMetadata = error instanceof TypedError 
          ? error.metadata
          : {
              code: 'UNKNOWN_ERROR',
              domain: 'system',
              severity: severity || 'medium',
              timestamp: new Date().toISOString(),
              context
            }

        const duration = metadata.severity === 'critical' ? Infinity : undefined

        toast({
          title: error instanceof TypedError ? error.name : 'Error',
          description: error.message,
          variant: 'destructive',
          duration,
        })
      }
    },
    [toast, defaultOptions]
  )

  const withErrorHandling = useCallback(
    <T>(fn: () => Promise<T>, options: ErrorHandlerOptions = {}): Promise<T> => {
      return fn().catch((error: unknown) => {
        handleError(error instanceof Error ? error : new Error(String(error)), options)
        throw error
      })
    },
    [handleError]
  )

  return {
    handleError,
    withErrorHandling,
  }
}

// Example usage:
// const { handleError, withErrorHandling } = useErrorHandler({
//   showToast: true,
//   severity: 'medium',
//   context: { component: 'UserProfile' }
// })
//
// try {
//   await withErrorHandling(
//     async () => {
//       // Your async code here
//     },
//     { severity: 'high' }
//   )
// } catch (error) {
//   // Handle specific error cases if needed
// }
//
// // Or handle errors directly:
// handleError(new ValidationError('Invalid input', {
//   code: 'VALIDATION_ERROR',
//   domain: 'form',
//   severity: 'medium',
//   context: { field: 'email' }
// })) 