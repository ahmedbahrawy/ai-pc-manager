'use client'

import { useEffect } from 'react'
import { Button } from '@/app/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error)
  }, [error])

  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-destructive">Oops! Something went wrong</h1>
        <p className="text-muted-foreground text-lg">
          {error.message || 'An unexpected error occurred. Our team has been notified.'}
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => reset()} variant="default">
            Try again
          </Button>
          <Button onClick={() => router.push('/')} variant="outline">
            Go home
          </Button>
        </div>
        {error.digest && (
          <p className="text-sm text-muted-foreground mt-8">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
} 