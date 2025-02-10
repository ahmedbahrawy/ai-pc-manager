"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS, CARD_HOVER_MOTION_PROPS } from "@/app/lib/animations"
import { Brain, Code, LineChart, MessageSquare, Sparkles, Database, Shield, Cloud } from "lucide-react"

const services = [
  {
    title: "AI Analytics",
    description: "Advanced data analysis using machine learning algorithms",
    category: "analytics",
    icon: LineChart,
    features: ["Predictive Analytics", "Pattern Recognition", "Real-time Insights"],
    technologies: ["TensorFlow", "Python", "Jupyter"],
  },
  {
    title: "NLP Solutions",
    description: "Natural language processing and understanding",
    category: "nlp",
    icon: MessageSquare,
    features: ["Text Analysis", "Sentiment Analysis", "Language Translation"],
    technologies: ["BERT", "GPT", "spaCy"],
  },
  {
    title: "Machine Learning",
    description: "Custom ML models for your business needs",
    category: "ml",
    icon: Brain,
    features: ["Custom Models", "AutoML", "Model Optimization"],
    technologies: ["PyTorch", "scikit-learn", "Keras"],
  },
  {
    title: "AI Development",
    description: "AI-powered development tools and APIs",
    category: "development",
    icon: Code,
    features: ["Code Generation", "Bug Detection", "Performance Analysis"],
    technologies: ["GitHub Copilot", "SonarQube", "Jest"],
  },
  {
    title: "Process Automation",
    description: "Intelligent automation solutions",
    category: "automation",
    icon: Sparkles,
    features: ["Workflow Automation", "Task Scheduling", "Process Mining"],
    technologies: ["UiPath", "Power Automate", "Zapier"],
  },
  {
    title: "Data Management",
    description: "AI-driven data management and governance",
    category: "data",
    icon: Database,
    features: ["Data Governance", "Quality Control", "Master Data Management"],
    technologies: ["Snowflake", "Databricks", "Talend"],
  },
  {
    title: "AI Security",
    description: "Security solutions powered by AI",
    category: "security",
    icon: Shield,
    features: ["Threat Detection", "Fraud Prevention", "Security Analytics"],
    technologies: ["Darktrace", "CrowdStrike", "Cylance"],
  },
  {
    title: "Cloud AI",
    description: "Cloud-based AI infrastructure and services",
    category: "cloud",
    icon: Cloud,
    features: ["Cloud Integration", "Scalable Infrastructure", "Managed Services"],
    technologies: ["AWS", "Azure", "Google Cloud"],
  },
]

const categories = [
  { label: "All", value: "all" },
  { label: "Analytics", value: "analytics" },
  { label: "NLP", value: "nlp" },
  { label: "Machine Learning", value: "ml" },
  { label: "Development", value: "development" },
  { label: "Automation", value: "automation" },
  { label: "Data", value: "data" },
  { label: "Security", value: "security" },
  { label: "Cloud", value: "cloud" },
]

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredServices = services.filter((service) => {
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some(feature => 
        feature.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      service.technologies.some(tech => 
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      )

    const matchesCategory = 
      selectedCategory === "all" || service.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Service Catalog</h1>
        <p className="text-xl text-muted-foreground">
          Explore our comprehensive range of AI-powered services
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 space-y-4"
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <Input
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:max-w-xs"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="h-9"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={STAGGER_CONTAINER_VARIANTS}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredServices.map((service) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              variants={STAGGER_CHILD_VARIANTS}
              {...CARD_HOVER_MOTION_PROPS}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 text-sm font-medium">Features</h4>
                      <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        {service.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-medium">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
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
        })}
      </motion.div>
    </div>
  )
} 