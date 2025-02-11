import { Brain } from "lucide-react"
import Link from "next/link"
import { SITE_CONFIG } from "@/app/lib/constants/site"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <Brain className="h-8 w-8 text-primary" aria-hidden="true" />
      <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
      <span className="sr-only">Return to homepage</span>
    </Link>
  )
} 