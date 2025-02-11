import { useState, useEffect } from "react"

interface ScrollState {
  isScrolled: boolean
  scrollY: number
  scrollDirection: "up" | "down" | null
}

export function useScroll(threshold = 20) {
  const [scrollState, setScrollState] = useState<ScrollState>({
    isScrolled: false,
    scrollY: 0,
    scrollDirection: null,
  })

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? "down" : "up"

      setScrollState({
        isScrolled: currentScrollY > threshold,
        scrollY: currentScrollY,
        scrollDirection: direction,
      })

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return scrollState
} 