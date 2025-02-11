import { Brain, Code, LineChart, MessageSquare, Sparkles, Database, Shield, Cloud } from "lucide-react"
import { Service } from "@/app/types/services"
import { SERVICE_CATEGORIES } from "@/app/lib/constants/categories"

export const SERVICES: Service[] = [
  {
    title: "AI Analytics",
    description: "Advanced data analysis using machine learning algorithms",
    category: SERVICE_CATEGORIES.ANALYTICS,
    icon: LineChart,
    features: ["Predictive Analytics", "Pattern Recognition", "Real-time Insights"],
    technologies: ["TensorFlow", "Python", "Jupyter"],
  },
  {
    title: "NLP Solutions",
    description: "Natural language processing and understanding",
    category: SERVICE_CATEGORIES.NLP,
    icon: MessageSquare,
    features: ["Text Analysis", "Sentiment Analysis", "Language Translation"],
    technologies: ["BERT", "GPT", "spaCy"],
  },
  {
    title: "Machine Learning",
    description: "Custom ML models for your business needs",
    category: SERVICE_CATEGORIES.ML,
    icon: Brain,
    features: ["Custom Models", "AutoML", "Model Optimization"],
    technologies: ["PyTorch", "scikit-learn", "Keras"],
  },
  {
    title: "AI Development",
    description: "AI-powered development tools and APIs",
    category: SERVICE_CATEGORIES.DEVELOPMENT,
    icon: Code,
    features: ["Code Generation", "Bug Detection", "Performance Analysis"],
    technologies: ["GitHub Copilot", "SonarQube", "Jest"],
  },
  {
    title: "Process Automation",
    description: "Intelligent automation solutions",
    category: SERVICE_CATEGORIES.AUTOMATION,
    icon: Sparkles,
    features: ["Workflow Automation", "Task Scheduling", "Process Mining"],
    technologies: ["UiPath", "Power Automate", "Zapier"],
  },
  {
    title: "Data Management",
    description: "AI-driven data management and governance",
    category: SERVICE_CATEGORIES.DATA,
    icon: Database,
    features: ["Data Governance", "Quality Control", "Master Data Management"],
    technologies: ["Snowflake", "Databricks", "Talend"],
  },
  {
    title: "AI Security",
    description: "Security solutions powered by AI",
    category: SERVICE_CATEGORIES.SECURITY,
    icon: Shield,
    features: ["Threat Detection", "Fraud Prevention", "Security Analytics"],
    technologies: ["Darktrace", "CrowdStrike", "Cylance"],
  },
  {
    title: "Cloud AI",
    description: "Cloud-based AI infrastructure and services",
    category: SERVICE_CATEGORIES.CLOUD,
    icon: Cloud,
    features: ["Cloud Integration", "Scalable Infrastructure", "Managed Services"],
    technologies: ["AWS", "Azure", "Google Cloud"],
  },
] 