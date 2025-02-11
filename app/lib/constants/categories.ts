import { CategoryOption } from "@/app/types/services"

export const SERVICE_CATEGORIES = {
  ALL: "all",
  ANALYTICS: "analytics",
  NLP: "nlp",
  ML: "ml",
  DEVELOPMENT: "development",
  AUTOMATION: "automation",
  DATA: "data",
  SECURITY: "security",
  CLOUD: "cloud",
} as const

export const CATEGORY_OPTIONS: CategoryOption[] = [
  { label: "All", value: SERVICE_CATEGORIES.ALL },
  { label: "Analytics", value: SERVICE_CATEGORIES.ANALYTICS },
  { label: "NLP", value: SERVICE_CATEGORIES.NLP },
  { label: "Machine Learning", value: SERVICE_CATEGORIES.ML },
  { label: "Development", value: SERVICE_CATEGORIES.DEVELOPMENT },
  { label: "Automation", value: SERVICE_CATEGORIES.AUTOMATION },
  { label: "Data", value: SERVICE_CATEGORIES.DATA },
  { label: "Security", value: SERVICE_CATEGORIES.SECURITY },
  { label: "Cloud", value: SERVICE_CATEGORIES.CLOUD },
] 