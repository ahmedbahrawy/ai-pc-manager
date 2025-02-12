interface SolutionsSectionProps {
  title: string
  description: string
  items: {
    title: string
    description: string
    href: string
  }[]
}

export function SolutionsSection({ title, description, items }: SolutionsSectionProps) {
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
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex flex-col gap-4 rounded-lg border p-6 transition-colors hover:bg-muted/50"
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
} 