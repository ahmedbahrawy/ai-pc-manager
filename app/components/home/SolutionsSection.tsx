import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/app/components/ui/card"
import { FADE_DOWN_ANIMATION_VARIANTS, CARD_HOVER_MOTION_PROPS } from "@/app/lib/animations"
import { HOME_SOLUTIONS } from "@/app/lib/constants/home"

export function SolutionsSection() {
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
          {HOME_SOLUTIONS.title}
        </motion.h2>
        <motion.p
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="mt-4 text-lg text-muted-foreground"
        >
          {HOME_SOLUTIONS.description}
        </motion.p>
      </motion.div>

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
        className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4"
      >
        {HOME_SOLUTIONS.items.map((solution) => {
          const Icon = solution.icon
          return (
            <Link key={solution.title} href={solution.href}>
              <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} {...CARD_HOVER_MOTION_PROPS}>
                <Card className="h-full">
                  <CardHeader className="pb-4">
                    <div className="mb-2 inline-block rounded-lg bg-primary/10 p-3">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{solution.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          )
        })}
      </motion.div>
    </section>
  )
} 