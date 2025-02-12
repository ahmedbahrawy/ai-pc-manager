interface StatsSectionProps {
  title: string
  description: string
  items: {
    name: string
    value: string
  }[]
}

export function StatsSection({ title, description, items }: StatsSectionProps) {
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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 text-center">
            <div className="text-3xl font-bold">{item.value}</div>
            <div className="text-sm text-muted-foreground">{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
} 