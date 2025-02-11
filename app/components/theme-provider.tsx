"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <NextThemesProvider
      {...props}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      attribute="class"
      value={{
        light: "light",
        dark: "dark",
        system: "system",
      }}
    >
      {children}
    </NextThemesProvider>
  )
} 