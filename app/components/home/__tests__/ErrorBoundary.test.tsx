import { render, screen, fireEvent } from "@testing-library/react"
import { HomeErrorBoundary } from "../ErrorBoundary"

const ThrowError = () => {
  throw new Error("Test error")
}

describe("HomeErrorBoundary", () => {
  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("renders children when there is no error", () => {
    render(
      <HomeErrorBoundary>
        <div>Test content</div>
      </HomeErrorBoundary>
    )

    expect(screen.getByText("Test content")).toBeInTheDocument()
  })

  it("renders error UI when there is an error", () => {
    render(
      <HomeErrorBoundary>
        <ThrowError />
      </HomeErrorBoundary>
    )

    expect(screen.getByText("Something went wrong")).toBeInTheDocument()
    expect(
      screen.getByText("We apologize for the inconvenience. Please try refreshing the page.")
    ).toBeInTheDocument()
  })

  it("reloads page when Try Again button is clicked", () => {
    const reloadMock = jest.fn()
    Object.defineProperty(window, "location", {
      value: { reload: reloadMock },
      writable: true,
    })

    render(
      <HomeErrorBoundary>
        <ThrowError />
      </HomeErrorBoundary>
    )

    fireEvent.click(screen.getByText("Try Again"))
    expect(reloadMock).toHaveBeenCalled()
  })
}) 