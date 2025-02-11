"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"
import { Brain, Menu, X, ChevronRight, Award, Globe2, Zap, Users, Shield, Trophy, ArrowRight } from "lucide-react"
import { Card } from "@/app/components/atoms/Card"
import { Layout } from "@/app/components/templates/Layout"
import { Section } from "@/app/components/atoms/Section"
import { SectionHeading } from "@/app/components/molecules/SectionHeading"
import { ACCREDITATION_CARDS, MEMBERSHIP_CARDS, AI_FEATURES } from "@/app/lib/constants/site"
import { SLIDE_IN_LEFT, SLIDE_IN_RIGHT } from "@/app/lib/utils/animations"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">GenomeAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button>Get Started</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full">Get Started</Button>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <Section background="transparent" className="min-h-screen flex items-center pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={SLIDE_IN_LEFT}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transform Your Business with{" "}
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              AI-Driven Growth
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Unlock the power of artificial intelligence to drive innovation,
            efficiency, and sustainable growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
              Get Started Today
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              View Case Studies
              <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={SLIDE_IN_RIGHT}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="relative aspect-square">
            <Image
              src="/hero-3d.png"
              alt="AI Growth Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function AccreditationSection() {
  return (
    <Section background="gradient-down">
      <SectionHeading
        title="Join the Elite Global Professionals"
        description="Master your industry with GAQM® accredited certification programs"
        icon={{
          src: "/gaqm-logo.png",
          alt: "GAQM Logo",
        }}
      />

      <div className="grid md:grid-cols-3 gap-8">
        {ACCREDITATION_CARDS.map((card, index) => (
          <Card
            key={index}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="text-muted-foreground">{card.description}</p>
              <ul className="space-y-2">
                {card.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

function AITransformationSection() {
  return (
    <Section>
      <SectionHeading
        title="Injecting AI into Transformative Fusion"
        description="Revolutionize your business with cutting-edge AI solutions"
      />

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          variants={SLIDE_IN_LEFT}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">Transform Your Industry</h3>
          <p className="text-lg text-muted-foreground">
            Leverage the power of AI to revolutionize your business processes, enhance decision-making, 
            and drive unprecedented growth in your industry.
          </p>
          <ul className="space-y-4">
            {AI_FEATURES.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={SLIDE_IN_RIGHT}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-primary/5 rounded-2xl p-8"
        >
          <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent relative overflow-hidden">
            <Image
              src="/ai-transform.png"
              alt="AI Transformation Illustration"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

function MembershipSection() {
  return (
    <Section background="gradient-up" pattern>
      <SectionHeading
        title="Claim Your Global Trainer Membership"
        description="Join an exclusive network of GAQM partners and certified trainers"
        icon={{
          src: "/certification-badge.png",
          alt: "Certification Badge",
          size: 96,
        }}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MEMBERSHIP_CARDS.map((item, index) => (
          <Card
            key={index}
            gradient
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
              <div className="text-sm font-medium text-primary bg-primary/5 py-1 px-3 rounded-full inline-block">
                {item.highlight}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
          Become a Certified Trainer
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Section>
  )
}

export default function HomePage() {
  return (
    <Layout>
      <Header />
      <HeroSection />
      <AccreditationSection />
      <AITransformationSection />
      <MembershipSection />
    </Layout>
  )
} 