import { Button } from "@/app/components/ui/button"

interface CTASectionProps {
  title: string
  description: string
  cta: {
    primary: {
      text: string
      href: string
    }
    secondary: {
      text: string
      href: string
    }
  }
}

export function CTASection({ title, description, cta }: CTASectionProps) {
  return (
    <section className="container flex flex-col items-center gap-8 text-center">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        {description}
      </p>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <a href={cta.primary.href}>{cta.primary.text}</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href={cta.secondary.href}>{cta.secondary.text}</a>
        </Button>
      </div>
    </section>
  )
} 