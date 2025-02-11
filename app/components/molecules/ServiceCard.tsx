import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import { CARD_HOVER_MOTION_PROPS } from "@/app/lib/animations"
import { Service } from "@/app/types/services"

type ServiceCardProps = Omit<Service, 'category'>

export function ServiceCard({ title, description, icon: Icon, features, technologies }: ServiceCardProps) {
  return (
    <motion.div {...CARD_HOVER_MOTION_PROPS}>
      <Card className="h-full">
        <CardHeader>
          <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-medium">Features</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 