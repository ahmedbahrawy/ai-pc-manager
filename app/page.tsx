"use client"

import { HeroSection } from './components/home/HeroSection'
import { ServicesSection } from './components/home/ServicesSection'
import { AIPersonaSection } from './components/home/AIPersonaSection'
import { ContactSection } from './components/home/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AIPersonaSection />
      <ContactSection />
    </>
  )
} 