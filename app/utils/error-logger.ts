import { TypedError, ErrorSeverity, ErrorMetadata } from './error-types'

interface ErrorLog {
  timestamp: string
  error: TypedError | Error
  metadata: ErrorMetadata
}

class ErrorLogger {
  private static instance: ErrorLogger
  private logs: ErrorLog[] = []
  private readonly MAX_LOGS = 100

  private constructor() {}

  static getInstance(): ErrorLogger {
    if (!ErrorLogger.instance) {
      ErrorLogger.instance = new ErrorLogger()
    }
    return ErrorLogger.instance
  }

  public log(
    error: Error | TypedError,
    severity: ErrorSeverity = 'medium',
    context: Record<string, unknown> = {}
  ): void {
    let metadata: ErrorMetadata

    if (error instanceof TypedError) {
      metadata = {
        ...error.metadata,
        context: {
          ...error.metadata.context,
          ...context
        }
      }
    } else {
      metadata = {
        code: 'UNKNOWN_ERROR',
        domain: 'system',
        severity,
        timestamp: new Date().toISOString(),
        path: typeof window !== 'undefined' ? window.location.pathname : undefined,
        context
      }
    }

    const errorLog: ErrorLog = {
      timestamp: new Date().toISOString(),
      error,
      metadata
    }

    this.logs.unshift(errorLog)
    if (this.logs.length > this.MAX_LOGS) {
      this.logs.pop()
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('Error Log')
      console.error('Error:', error)
      console.info('Metadata:', metadata)
      console.groupEnd()
    }

    // Send to error tracking service
    this.sendToErrorService(errorLog)
  }

  public getRecentLogs(count: number = 10): ErrorLog[] {
    return this.logs.slice(0, count)
  }

  public getLogsByDomain(domain: string): ErrorLog[] {
    return this.logs.filter(log => 
      log.metadata.domain === domain
    )
  }

  public getLogsBySeverity(severity: ErrorSeverity): ErrorLog[] {
    return this.logs.filter(log => 
      log.metadata.severity === severity
    )
  }

  public clearLogs(): void {
    this.logs = []
  }

  private sendToErrorService(errorLog: ErrorLog): void {
    // Implement your error service integration here
    // Example: Sentry.captureException(errorLog.error, {
    //   level: errorLog.metadata.severity,
    //   tags: {
    //     domain: errorLog.metadata.domain,
    //     code: errorLog.metadata.code,
    //   },
    //   extra: errorLog.metadata.context,
    // })
  }
}

export const errorLogger = ErrorLogger.getInstance()

// Error boundary logger
export function logErrorBoundary(error: Error, errorInfo: React.ErrorInfo): void {
  errorLogger.log(error, 'high', {
    domain: 'rendering',
    component: errorInfo.componentStack,
    action: 'render',
  })
}

// API error logger
export function logApiError(error: Error, endpoint: string, method: string): void {
  errorLogger.log(error, 'high', {
    domain: 'api',
    action: 'api_call',
    endpoint,
    method,
  })
}

// Navigation error logger
export function logNavigationError(error: Error, from: string, to: string): void {
  errorLogger.log(error, 'medium', {
    domain: 'navigation',
    action: 'navigation',
    from,
    to,
  })
} 