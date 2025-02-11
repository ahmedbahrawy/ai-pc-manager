import { motion } from "framer-motion"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { CATEGORY_OPTIONS } from "@/app/lib/constants/categories"
import { ServiceFilterCategory } from "@/app/types/services"

interface ServiceFiltersProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  selectedCategory: ServiceFilterCategory
  onCategoryChange: (category: ServiceFilterCategory) => void
}

export function ServiceFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
}: ServiceFiltersProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value)
  }

  return (
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
          onChange={handleSearchChange}
          className="md:max-w-xs"
          aria-label="Search services"
        />
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {CATEGORY_OPTIONS.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => onCategoryChange(category.value)}
              className="h-9"
              aria-pressed={selectedCategory === category.value}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </motion.div>
  )
} 