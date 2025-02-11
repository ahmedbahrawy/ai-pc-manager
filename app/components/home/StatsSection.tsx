import { motion } from "framer-motion"
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/app/lib/animations"
import { HOME_STATS } from "@/app/lib/constants/home"

export function StatsSection() {
  return (
    <section className="container py-24 sm:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.h2
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {HOME_STATS.title}
        </motion.h2>
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="mt-4 text-lg text-muted-foreground"
        >
          {HOME_STATS.description}
        </motion.p>
      </motion.div>

      <motion.dl
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {HOME_STATS.items.map((stat) => (
          <motion.div
            key={stat.label}
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mx-auto flex max-w-xs flex-col gap-y-2 text-center"
          >
            <dt className="text-base leading-7 text-muted-foreground">{stat.label}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight sm:text-4xl">
              {stat.value}
            </dd>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  )
} 