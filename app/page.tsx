import type { Metadata } from "next"
import { Suspense } from "react"
import { HomeView } from "@/app/views/home/HomeView"
import { HomeLoading } from "@/app/components/home/loading"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: "AI Innovation Solutions | Transform Your Business",
  description: "Unlock the power of artificial intelligence to drive growth, efficiency, and innovation in your business. Our cutting-edge solutions help you stay ahead.",
  keywords: ["AI", "artificial intelligence", "software development", "innovation", "business solutions"],
  authors: [{ name: "Your Company Name" }],
  openGraph: {
    title: "AI Innovation Solutions | Transform Your Business",
    description: "Unlock the power of artificial intelligence to drive growth, efficiency, and innovation in your business. Our cutting-edge solutions help you stay ahead.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Innovation Solutions",
      },
    ],
    siteName: "AI Innovation Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Innovation Solutions | Transform Your Business",
    description: "Unlock the power of artificial intelligence to drive growth, efficiency, and innovation in your business. Our cutting-edge solutions help you stay ahead.",
    images: ["/images/twitter-card.jpg"],
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Suspense fallback={<HomeLoading />}>
        <HomeView />
      </Suspense>
    </main>
  )
} 