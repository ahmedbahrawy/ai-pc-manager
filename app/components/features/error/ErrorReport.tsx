"use client"

import { type ErrorInfo } from "react"
import { Button } from "@/app/components/ui/button"

interface ErrorReportProps {
  error: Error
  errorInfo: ErrorInfo | null
  onReset: () => void
}

export function ErrorReport({ error, errorInfo, onReset }: ErrorReportProps) {
  return (
    <div className="min-h-screen bg-background animate-in fade-in duration-300">
      <div className="container flex min-h-screen flex-col items-center justify-center gap-8">
        <div className="mx-auto max-w-md text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Something went wrong</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            We apologize for the inconvenience. The error has been logged and we'll look into it.
          </p>
          <div className="space-y-4">
            <Button onClick={onReset} size="lg">
              Try again
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/">Return home</a>
            </Button>
          </div>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="w-full max-w-2xl rounded-lg border bg-muted/50 p-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Error Details</h2>
              <pre className="overflow-auto rounded-md bg-muted p-4 text-sm">
                <code>{error.toString()}</code>
              </pre>
              {errorInfo && (
                <>
                  <h3 className="font-medium">Component Stack</h3>
                  <pre className="overflow-auto rounded-md bg-muted p-4 text-sm">
                    <code>{errorInfo.componentStack}</code>
                  </pre>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 