export class AppError extends Error {
  constructor(
    message: string,
    public code: string = 'UNKNOWN_ERROR',
    public statusCode: number = 500
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export function isAppError(error: unknown): error is AppError {
  return error instanceof AppError
}

export function handleError(error: unknown): AppError {
  if (isAppError(error)) {
    return error
  }

  if (error instanceof Error) {
    return new AppError(error.message)
  }

  return new AppError('An unexpected error occurred')
}

export function createHttpError(statusCode: number, message?: string): AppError {
  const statusMessages: Record<number, string> = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    409: 'Conflict',
    422: 'Unprocessable Entity',
    429: 'Too Many Requests',
    500: 'Internal Server Error',
    503: 'Service Unavailable'
  }

  const defaultMessage = statusMessages[statusCode] || 'Unknown Error'
  const code = `HTTP_${statusCode}`

  return new AppError(message || defaultMessage, code, statusCode)
}

export async function withErrorHandling<T>(
  fn: () => Promise<T>,
  errorHandler?: (error: AppError) => void
): Promise<T> {
  try {
    return await fn()
  } catch (error) {
    const appError = handleError(error)
    
    if (errorHandler) {
      errorHandler(appError)
    } else {
      console.error('Unhandled error:', appError)
    }

    throw appError
  }
} 