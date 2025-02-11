"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { ErrorReport } from "./ErrorReport"

interface Props {
  children: ReactNode
  fallback: (props: { error: Error | null; reset: () => void }) => ReactNode
}

interface State {
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    error: null,
    errorInfo: null,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { error, errorInfo: null }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo)
    this.setState({ errorInfo })
  }

  private handleReset = () => {
    this.setState({ error: null, errorInfo: null })
  }

  public render() {
    const { error } = this.state
    const { children, fallback } = this.props

    if (error) {
      return fallback({ error, reset: this.handleReset })
    }

    return children
  }
}