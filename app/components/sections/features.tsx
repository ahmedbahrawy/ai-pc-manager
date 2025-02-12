import type { ComponentType } from "react"
import type { LucideProps } from "lucide-react"

interface FeaturesSectionProps {
  title: string
  description: string
  items: {
    icon: ComponentType<LucideProps>
    title: string
    description: string
  }[]
}

export function FeaturesSection({ title, description, items }: FeaturesSectionProps) {
  return (
    <section className="container flex flex-col gap-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {description}
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon
          return (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg border p-6 transition-colors hover:bg-muted/50"
            >
              <Icon className="h-8 w-8" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
} 