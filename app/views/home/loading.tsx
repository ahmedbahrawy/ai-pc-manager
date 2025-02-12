import { Skeleton } from "@/app/components/ui/skeleton"

export function HomeLoading() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      {/* Hero Section Loading */}
      <div className="container flex flex-col items-center gap-8 text-center">
        <Skeleton className="h-12 w-3/4 max-w-2xl" />
        <Skeleton className="h-6 w-2/3 max-w-xl" />
        <div className="flex gap-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>

      {/* Features Section Loading */}
      <div className="container flex flex-col gap-8">
        <div className="text-center">
          <Skeleton className="mx-auto h-8 w-64" />
          <Skeleton className="mx-auto mt-4 h-4 w-96" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-lg border p-6">
              <Skeleton className="h-8 w-8" />
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Solutions Section Loading */}
      <div className="container flex flex-col gap-8">
        <div className="text-center">
          <Skeleton className="mx-auto h-8 w-64" />
          <Skeleton className="mx-auto mt-4 h-4 w-96" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-lg border p-6">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section Loading */}
      <div className="container flex flex-col gap-8">
        <div className="text-center">
          <Skeleton className="mx-auto h-8 w-64" />
          <Skeleton className="mx-auto mt-4 h-4 w-96" />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-2 text-center">
              <Skeleton className="mx-auto h-8 w-24" />
              <Skeleton className="mx-auto h-4 w-32" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section Loading */}
      <div className="container flex flex-col items-center gap-8 text-center">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96" />
        <div className="flex gap-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  )
} 