import { Button } from "@/app/components/ui/button"

interface HeroSectionProps {
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

export function HeroSection({ title, description, cta }: HeroSectionProps) {
  return (
    <section className="container flex flex-col items-center gap-8 pt-24 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h1>
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