import Link from 'next/link'
import { Button } from '@/app/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[600px] flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-muted-foreground text-lg">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              Go home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">
              Contact support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 