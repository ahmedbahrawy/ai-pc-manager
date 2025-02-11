"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { ErrorReport } from "./ErrorReport"

interface Props {
  children: ReactNode
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
  }

  public render() {
    if (this.state.error) {
      return (
        <ErrorReport
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          onReset={() => this.setState({ error: null, errorInfo: null })}
        />
      )
    }

    return this.props.children
  }
} 