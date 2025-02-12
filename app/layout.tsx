import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer'
import { ClientProviders } from './components/ClientProviders'
import { headers } from 'next/headers'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://your-production-domain.com'),
  title: {
    default: 'AI Innovation Solutions',
    template: '%s | AI Innovation Solutions',
  },
  description: 'Experience the future of software development with our AI-powered platform.',
  keywords: 'AI Solutions, Business Consulting, AI-Micro Apps, Digital Transformation',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AI-Driven Business Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Driven Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yourtwitterhandle',
    images: '/twitter-image.jpg',
  },
  applicationName: 'AI Innovation Solutions',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'AI Innovation Solutions',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Add cache-control headers for static assets
  const headersList = headers()
  const isStaticRoute = !headersList.get("x-middleware-cache")

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_APP_URL} />
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_APP_URL} />
        
        {/* Add preload for critical assets */}
        <link
          rel="preload"
          href="/fonts/inter-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ClientProviders>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ClientProviders>
      </body>
    </html>
  )
} 