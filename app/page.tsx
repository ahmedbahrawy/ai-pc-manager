import type { Metadata } from "next"
import { Suspense } from "react"
import { HeroSection } from "@/app/components/home/HeroSection"
import { FeaturesSection } from "@/app/components/home/FeaturesSection"
import { SolutionsSection } from "@/app/components/home/SolutionsSection"
import { StatsSection } from "@/app/components/home/StatsSection"
import { CTASection } from "@/app/components/home/CTASection"
import { HomeErrorBoundary } from "@/app/components/home/ErrorBoundary"
import { HomeLoading } from "@/app/components/home/loading"

export const metadata: Metadata = {
  title: "AI Innovation Solutions | Transform Your Business",
  description: "Unlock the power of artificial intelligence to drive growth, efficiency, and innovation in your business. Our cutting-edge solutions help you stay ahead.",
  openGraph: {
    title: "AI Innovation Solutions | Transform Your Business",
    description: "Unlock the power of artificial intelligence to drive growth, efficiency, and innovation in your business. Our cutting-edge solutions help you stay ahead.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <HomeErrorBoundary>
      <Suspense fallback={<HomeLoading />}>
        <div className="relative flex flex-col">
          <HeroSection />
          <div className="relative z-10 flex flex-col bg-background">
            <FeaturesSection />
            <SolutionsSection />
            <StatsSection />
            <CTASection />
          </div>
        </div>
      </Suspense>
    </HomeErrorBoundary>
  )
} 