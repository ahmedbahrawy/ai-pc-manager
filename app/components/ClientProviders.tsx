"use client"

import { ThemeProvider } from "./theme-provider"
import { Toaster } from "./ui/toaster"
import { RootErrorBoundary } from "./features/error/RootErrorBoundary"
import { type ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function ClientProviders({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="app-theme"
    >
      <RootErrorBoundary>
        {children}
      </RootErrorBoundary>
      <Toaster />
    </ThemeProvider>
  )
} 