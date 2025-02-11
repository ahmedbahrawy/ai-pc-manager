import { useState, useMemo } from "react"
import { Service, ServiceFilterCategory } from "@/app/types/services"

interface UseServiceFilterProps {
  services: Service[]
}

interface UseServiceFilterReturn {
  searchQuery: string
  setSearchQuery: (query: string) => void
  selectedCategory: ServiceFilterCategory
  setSelectedCategory: (category: ServiceFilterCategory) => void
  filteredServices: Service[]
}

export function useServiceFilter({ services }: UseServiceFilterProps): UseServiceFilterReturn {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<ServiceFilterCategory>("all")

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const searchTerms = searchQuery.toLowerCase().trim()
      
      if (!searchTerms && selectedCategory === "all") {
        return true
      }

      const matchesSearch = !searchTerms || [
        service.title,
        service.description,
        ...service.features,
        ...service.technologies,
      ].some(text => text.toLowerCase().includes(searchTerms))

      const matchesCategory = selectedCategory === "all" || service.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [services, searchQuery, selectedCategory])

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredServices,
  }
} 