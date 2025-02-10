"use client"

import { motion } from 'framer-motion'
import { MessageSquare, Cpu, Award, TrendingUp } from 'lucide-react'
import { STAGGER_CHILD_VARIANTS, STAGGER_CONTAINER_VARIANTS } from '@/app/lib/animations'

const services = [
  {
    title: "Consultation",
    description: "Expert guidance to transform your business with AI-driven strategies",
    icon: MessageSquare,
  },
  {
    title: "AI-Micro Apps",
    description: "Custom AI solutions tailored to your specific business needs",
    icon: Cpu,
  },
  {
    title: "Certifications",
    description: "Industry-recognized certifications to validate your expertise",
    icon: Award,
  },
  {
    title: "Strategic Enhancement",
    description: "Data-driven strategies to accelerate your business growth",
    icon: TrendingUp,
  },
]

export function ServicesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Solutions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comprehensive AI-driven solutions tailored to accelerate your business growth and digital transformation
            </p>
          </motion.div>
          <motion.div
            variants={STAGGER_CONTAINER_VARIANTS}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={STAGGER_CHILD_VARIANTS}
                  className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-md transition-all hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 