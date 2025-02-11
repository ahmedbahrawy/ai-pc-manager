'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { errorLogger } from '@/app/utils/error-logger'
import { AppError } from '@/app/utils/error-handling'

interface ErrorReportProps {
  error: Error | AppError
  onClose: () => void
  onSubmit?: (report: ErrorReport) => Promise<void>
}

interface ErrorReport {
  description: string
  steps: string
  email: string
  error: Error | AppError
}

export function ErrorReport({ error, onClose, onSubmit }: ErrorReportProps) {
  const [description, setDescription] = useState('')
  const [steps, setSteps] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!description || !steps || !email) return

    setIsSubmitting(true)
    try {
      const report: ErrorReport = {
        description,
        steps,
        email,
        error,
      }

      if (onSubmit) {
        await onSubmit(report)
      } else {
        // Default submission logic
        console.log('Error report:', report)
        // You would typically send this to your error reporting service
      }

      onClose()
    } catch (submitError) {
      errorLogger.log(submitError as Error, 'high', {
        action: 'error_report_submission',
        additionalData: { originalError: error },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-lg max-w-md w-full p-6 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Report an Issue</h2>
          <p className="text-muted-foreground">
            Please provide details about what happened
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description">What went wrong?</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what you were trying to do..."
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="steps">Steps to reproduce</Label>
            <Textarea
              id="steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder="What steps led to this error?"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Your email (for updates)</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit report'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 