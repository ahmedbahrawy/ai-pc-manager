export type ErrorCode =
  | 'VALIDATION_ERROR'
  | 'API_ERROR'
  | 'NETWORK_ERROR'
  | 'AUTH_ERROR'
  | 'PERMISSION_ERROR'
  | 'NOT_FOUND'
  | 'RATE_LIMIT'
  | 'SERVER_ERROR'
  | 'UNKNOWN_ERROR'
  | `API_ERROR_${number}`

export type ErrorDomain =
  | 'api'
  | 'auth'
  | 'navigation'
  | 'rendering'
  | 'validation'
  | 'network'
  | 'system'
  | 'form'

export type ErrorSeverity = 'low' | 'medium' | 'high' | 'critical'

export interface ErrorMetadata {
  code: ErrorCode
  domain: ErrorDomain
  severity: ErrorSeverity
  timestamp: string
  path?: string
  component?: string
  action?: string
  userId?: string
  sessionId?: string
  requestId?: string
  statusCode?: number
  retryable?: boolean
  validationErrors?: Record<string, string[]>
  context?: Record<string, unknown>
}

export interface ErrorOptions {
  code?: ErrorCode
  domain?: ErrorDomain
  severity?: ErrorSeverity
  statusCode?: number
  retryable?: boolean
  validationErrors?: Record<string, string[]>
  context?: Record<string, unknown>
}

export class TypedError extends Error {
  readonly metadata: ErrorMetadata

  constructor(message: string, options: ErrorOptions = {}) {
    super(message)
    this.name = 'TypedError'

    const {
      code = 'UNKNOWN_ERROR',
      domain = 'system',
      severity = 'medium',
      statusCode,
      retryable = false,
      validationErrors,
      context
    } = options

    this.metadata = {
      code,
      domain,
      severity,
      timestamp: new Date().toISOString(),
      statusCode,
      retryable,
      validationErrors,
      context,
      path: typeof window !== 'undefined' ? window.location.pathname : undefined,
      sessionId: this.getSessionId(),
    }
  }

  private getSessionId(): string {
    if (typeof window === 'undefined') return ''
    return window.sessionStorage.getItem('sessionId') || ''
  }

  public isRetryable(): boolean {
    return this.metadata.retryable || false
  }

  public getValidationErrors(): Record<string, string[]> {
    return this.metadata.validationErrors || {}
  }

  public toJSON(): Record<string, unknown> {
    return {
      name: this.name,
      message: this.message,
      stack: this.stack,
      metadata: this.metadata,
    }
  }
}

export class ValidationError extends TypedError {
  constructor(
    message: string,
    validationErrors: Record<string, string[]>,
    context?: Record<string, unknown>
  ) {
    super(message, {
      code: 'VALIDATION_ERROR',
      domain: 'validation',
      severity: 'medium',
      statusCode: 422,
      retryable: false,
      validationErrors,
      context,
    })
    this.name = 'ValidationError'
  }
}

export class NetworkError extends TypedError {
  constructor(message: string, context?: Record<string, unknown>) {
    super(message, {
      code: 'NETWORK_ERROR',
      domain: 'network',
      severity: 'high',
      retryable: true,
      context,
    })
    this.name = 'NetworkError'
  }
}

export class AuthError extends TypedError {
  constructor(message: string, context?: Record<string, unknown>) {
    super(message, {
      code: 'AUTH_ERROR',
      domain: 'auth',
      severity: 'high',
      statusCode: 401,
      retryable: false,
      context,
    })
    this.name = 'AuthError'
  }
}

export function isTypedError(error: unknown): error is TypedError {
  return error instanceof TypedError
}

export function isValidationError(error: unknown): error is ValidationError {
  return error instanceof ValidationError
}

export function isNetworkError(error: unknown): error is NetworkError {
  return error instanceof NetworkError
}

export function isAuthError(error: unknown): error is AuthError {
  return error instanceof AuthError
}

export function createError(message: string, options: ErrorOptions = {}): TypedError {
  return new TypedError(message, options)
} 