import { Header } from "@/app/components/organisms/Header"
import { META_DEFAULTS } from "@/app/lib/constants/site"

interface LayoutProps {
  children: React.ReactNode
  meta?: {
    title?: string
    description?: string
    keywords?: string
  }
}

export function Layout({ children, meta = {} }: LayoutProps) {
  const title = meta.title || META_DEFAULTS.title
  const description = meta.description || META_DEFAULTS.description
  const keywords = meta.keywords || META_DEFAULTS.keywords

  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </head>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="relative">
          {children}
        </main>
      </div>
    </>
  )
} 