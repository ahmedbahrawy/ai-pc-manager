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
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        storageKey="theme"
      >
        <RootErrorBoundary>
          {children}
        </RootErrorBoundary>
      </ThemeProvider>
      <Toaster />
    </>
  )
} 