"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "@/app/components/molecules/ServiceCard"
import { ServiceFilters } from "@/app/components/molecules/ServiceFilters"
import { SERVICES } from "@/app/lib/data/services"
import { useServiceFilter } from "@/app/hooks/useServiceFilter"
import { STAGGER_CONTAINER_VARIANTS, STAGGER_CHILD_VARIANTS } from "@/app/lib/animations"

export default function ServicesPage() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    filteredServices,
  } = useServiceFilter({ services: SERVICES })

  return (
    <div className="container py-10">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Service Catalog</h1>
        <p className="text-xl text-muted-foreground">
          Explore our comprehensive range of AI-powered services
        </p>
      </motion.header>

      <ServiceFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <motion.section
        variants={STAGGER_CONTAINER_VARIANTS}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredServices.map((service) => (
          <motion.div key={service.title} variants={STAGGER_CHILD_VARIANTS}>
            <ServiceCard {...service} />
          </motion.div>
        ))}
        {filteredServices.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center text-muted-foreground"
          >
            No services found matching your criteria
          </motion.p>
        )}
      </motion.section>
    </div>
  )
} 