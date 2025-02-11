import { Skeleton } from "@/app/components/ui/skeleton"

export function HomeLoading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section Loading */}
      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 py-12 text-center md:py-16">
        <div className="relative z-10 max-w-4xl px-6 md:px-8">
          <Skeleton className="mx-auto h-16 w-3/4" />
          <Skeleton className="mx-auto mt-6 h-24 w-full" />
        </div>
        <div className="flex gap-4">
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>

      {/* Features Section Loading */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Skeleton className="mx-auto h-10 w-2/3" />
          <Skeleton className="mx-auto mt-4 h-16 w-full" />
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="relative pl-16">
              <Skeleton className="absolute left-0 top-0 h-10 w-10 rounded-lg" />
              <Skeleton className="h-6 w-48" />
              <Skeleton className="mt-2 h-20 w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Solutions Section Loading */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Skeleton className="mx-auto h-10 w-2/3" />
          <Skeleton className="mx-auto mt-4 h-16 w-full" />
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-full rounded-lg border p-6">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="mt-4 h-6 w-32" />
              <Skeleton className="mt-2 h-16 w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section Loading */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Skeleton className="mx-auto h-10 w-2/3" />
          <Skeleton className="mx-auto mt-4 h-16 w-full" />
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center">
              <Skeleton className="mx-auto h-12 w-24" />
              <Skeleton className="mx-auto mt-2 h-6 w-32" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section Loading */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <Skeleton className="mx-auto h-10 w-2/3" />
          <Skeleton className="mx-auto mt-4 h-16 w-full" />
          <div className="mt-10 flex justify-center gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </div>
  )
} 