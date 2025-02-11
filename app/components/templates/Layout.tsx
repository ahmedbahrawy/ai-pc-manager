import { Header } from "@/app/components/organisms/Header"
import { META_DEFAULTS } from "@/app/lib/constants/site"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
} 