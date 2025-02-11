import { logApiError } from './error-logger'
import {
  TypedError,
  ValidationError,
  NetworkError,
  AuthError,
  ErrorOptions
} from './error-types'

interface ApiErrorResponse {
  message?: string
  code?: string
  status?: number
  errors?: Record<string, string[]>
  context?: Record<string, unknown>
}

interface RequestInfo {
  method: string
  url: string
}

export class ApiError extends TypedError {
  errors?: Record<string, string[]>

  constructor(
    message: string,
    public status: number,
    errors?: Record<string, string[]>,
    context?: Record<string, unknown>
  ) {
    super(message, {
      code: `API_ERROR_${status}`,
      domain: 'api',
      severity: status >= 500 ? 'high' : 'medium',
      context: {
        ...context,
        status,
        errors,
      },
    })
    this.name = 'ApiError'
    this.errors = errors
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError
}

export function getValidationErrors(error: unknown): Record<string, string[]> | undefined {
  return isApiError(error) ? error.errors : undefined
}

export async function handleApiResponse(
  response: Response,
  requestInfo: RequestInfo
): Promise<Response> {
  if (!response.ok) {
    let errorData: ApiErrorResponse = {}
    
    try {
      errorData = await response.json()
    } catch {
      // If JSON parsing fails, use default error message
      errorData = {
        message: `HTTP error ${response.status}`,
        status: response.status,
      }
    }

    // Log the API error
    logApiError(
      new Error(errorData.message || `HTTP error ${response.status}`),
      requestInfo.url,
      requestInfo.method
    )

    throw new ApiError(
      errorData.message || `HTTP error ${response.status}`,
      response.status,
      errorData.errors,
      {
        url: requestInfo.url,
        method: requestInfo.method,
        statusText: response.statusText,
      }
    )
  }

  return response
}

// Example usage:
// const api = {
//   async fetch<T>(url: string, options: RequestInit = {}): Promise<T> {
//     const response = await fetch(url, options)
//     await handleApiResponse(response, { 
//       method: options.method || 'GET',
//       url 
//     })
//     return response.json()
//   }
// } 