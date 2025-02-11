import { LucideIcon } from "lucide-react"
import { SERVICE_CATEGORIES } from "@/app/lib/constants/categories"

export type ServiceCategory = Exclude<(typeof SERVICE_CATEGORIES)[keyof typeof SERVICE_CATEGORIES], "all">

export type ServiceFilterCategory = (typeof SERVICE_CATEGORIES)[keyof typeof SERVICE_CATEGORIES]

export interface Service {
  title: string
  description: string
  category: ServiceCategory
  icon: LucideIcon
  features: string[]
  technologies: string[]
}

export interface CategoryOption {
  label: string
  value: ServiceFilterCategory
} 