import { render, screen } from "@testing-library/react"
import { HomeLoading } from "../loading"

describe("HomeLoading", () => {
  it("renders all section skeletons", () => {
    render(<HomeLoading />)
    
    // Check hero section skeletons
    const heroSkeletons = screen.getAllByTestId("hero-skeleton")
    expect(heroSkeletons).toHaveLength(3)
    
    // Check feature section skeletons
    const featureSkeletons = screen.getAllByTestId("feature-skeleton")
    expect(featureSkeletons).toHaveLength(4)
    
    // Check solution section skeletons
    const solutionSkeletons = screen.getAllByTestId("solution-skeleton")
    expect(solutionSkeletons).toHaveLength(4)
    
    // Check stats section skeletons
    const statSkeletons = screen.getAllByTestId("stat-skeleton")
    expect(statSkeletons).toHaveLength(4)
    
    // Check CTA section skeletons
    const ctaSkeletons = screen.getAllByTestId("cta-skeleton")
    expect(ctaSkeletons).toHaveLength(4)
  })

  it("maintains correct layout structure", () => {
    const { container } = render(<HomeLoading />)
    
    // Check main container
    expect(container.firstChild).toHaveClass("flex", "min-h-screen", "flex-col")
    
    // Check section containers
    const containers = container.getElementsByClassName("container")
    expect(containers).toHaveLength(5) // Hero, Features, Solutions, Stats, CTA
    
    // Check grid layouts
    expect(container.querySelector(".grid-cols-1.lg\\:grid-cols-2")).toBeInTheDocument() // Features grid
    expect(container.querySelector(".grid-cols-1.lg\\:grid-cols-2.xl\\:grid-cols-4")).toBeInTheDocument() // Solutions grid
    expect(container.querySelector(".grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4")).toBeInTheDocument() // Stats grid
  })
}) 