'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import { Button } from './ui/button'
import { logErrorBoundary } from '@/app/utils/error-logger'
import { useToast } from './ui/use-toast'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  showToast?: boolean
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error
    logErrorBoundary(error, errorInfo)

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // Show toast notification if enabled
    if (this.props.showToast) {
      const { toast } = useToast()
      toast({
        title: 'Component Error',
        description: error.message || 'An unexpected error occurred in the application',
        variant: 'destructive',
      })
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  private handleReport = () => {
    // Implement error reporting functionality
    console.log('Reporting error:', this.state.error)
    // You could open a modal or navigate to a report form
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
          <div className="text-center space-y-4 max-w-md">
            <h2 className="text-2xl font-bold text-destructive">Something went wrong</h2>
            <p className="text-muted-foreground">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={this.handleReset} variant="default">
                Try again
              </Button>
              <Button onClick={this.handleReport} variant="outline">
                Report issue
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              If this issue persists, please contact support
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 