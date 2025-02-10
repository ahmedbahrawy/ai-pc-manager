"use client"

import { Button } from "@/app/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import { useToast } from "@/app/components/ui/use-toast"
import { Brain, Code, LineChart, MessageSquare, Sparkles } from "lucide-react"

const solutions = [
  {
    title: "AI-Powered Analytics",
    description: "Advanced data analysis using machine learning algorithms to provide actionable insights for your business.",
    icon: LineChart,
    features: ["Predictive Analytics", "Pattern Recognition", "Automated Reporting"],
  },
  {
    title: "Natural Language Processing",
    description: "Intelligent text processing and understanding for automated communication and content analysis.",
    icon: MessageSquare,
    features: ["Sentiment Analysis", "Text Classification", "Language Translation"],
  },
  {
    title: "Machine Learning Solutions",
    description: "Custom ML models tailored to your specific business needs and challenges.",
    icon: Brain,
    features: ["Custom Model Training", "Automated Learning", "Performance Optimization"],
  },
  {
    title: "AI Development Tools",
    description: "Developer tools and APIs powered by artificial intelligence to enhance your workflow.",
    icon: Code,
    features: ["Code Generation", "Bug Detection", "Performance Analysis"],
  },
  {
    title: "Smart Automation",
    description: "Intelligent automation solutions to streamline your business processes and increase efficiency.",
    icon: Sparkles,
    features: ["Process Automation", "Task Scheduling", "Workflow Optimization"],
  },
]

export default function AIMicroApps() {
  const { toast } = useToast()

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">AI-Micro Apps & Solutions</h1>
        <p className="text-xl text-muted-foreground">
          Discover our cutting-edge AI solutions designed to transform your business
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, index) => {
          const Icon = solution.icon
          return (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Request Sent",
                      description: "We'll contact you soon about " + solution.title,
                    })
                  }}
                >
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
} 