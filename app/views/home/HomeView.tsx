"use client"

import { Suspense } from "react"
import { HOME_HERO, HOME_FEATURES, HOME_SOLUTIONS, HOME_STATS, HOME_CTA } from "./constants"
import { HeroSection } from "@/app/components/sections/hero"
import { FeaturesSection } from "@/app/components/sections/features"
import { SolutionsSection } from "@/app/components/sections/solutions"
import { StatsSection } from "@/app/components/sections/stats"
import { CTASection } from "@/app/components/sections/cta"
import { HomeLoading } from "./loading"
import { HomeErrorBoundary } from "@/app/components/home/ErrorBoundary"

export function HomeView() {
  return (
    <HomeErrorBoundary>
      <div className="flex flex-col gap-16 md:gap-24">
        <Suspense fallback={<HomeLoading />}>
          <HeroSection {...HOME_HERO} />
          <FeaturesSection {...HOME_FEATURES} />
          <SolutionsSection {...HOME_SOLUTIONS} />
          <StatsSection {...HOME_STATS} />
          <CTASection {...HOME_CTA} />
        </Suspense>
      </div>
    </HomeErrorBoundary>
  )
} 