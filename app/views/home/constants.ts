import dynamic from "next/dynamic"
import { type IconProps } from "@/app/components/ui/icon"

// Dynamically import icons for better code splitting
const Brain = dynamic(() => import("lucide-react").then((mod) => mod.Brain))
const Code = dynamic(() => import("lucide-react").then((mod) => mod.Code))
const LineChart = dynamic(() => import("lucide-react").then((mod) => mod.LineChart))
const Shield = dynamic(() => import("lucide-react").then((mod) => mod.Shield))
const Cloud = dynamic(() => import("lucide-react").then((mod) => mod.Cloud))
const Lock = dynamic(() => import("lucide-react").then((mod) => mod.Lock))
const Sparkles = dynamic(() => import("lucide-react").then((mod) => mod.Sparkles))
const Users = dynamic(() => import("lucide-react").then((mod) => mod.Users))

export const HOME_HERO = {
  title: "Build better software with AI-powered development",
  description: "Experience the future of software development with our AI-powered platform. Write better code, faster and with fewer bugs.",
  cta: {
    primary: {
      text: "Get Started",
      href: "/signup",
    },
    secondary: {
      text: "Documentation",
      href: "/docs",
    },
  },
}

export const HOME_FEATURES = {
  title: "Features that empower your development",
  description: "Our platform provides powerful features to help you build better software, faster.",
  items: [
    {
      icon: Code,
      title: "AI-Powered Development",
      description: "Leverage the power of AI to write better code, faster and with fewer bugs.",
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team in real-time, no matter where you are.",
    },
    {
      icon: Brain,
      title: "Smart Code Analysis",
      description: "Get instant feedback on your code quality and potential improvements.",
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Built-in security features to protect your code and data.",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description: "Deploy your applications to the cloud with just a few clicks.",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Fine-grained access control to manage your team's permissions.",
    },
  ],
}

export const HOME_SOLUTIONS = {
  title: "Solutions for every need",
  description: "Whether you're a solo developer or part of a large team, we have the right solution for you.",
  items: [
    {
      title: "Personal",
      description: "Perfect for individual developers and small projects.",
      href: "/solutions/personal",
    },
    {
      title: "Team",
      description: "Collaborate effectively with your team and scale as you grow.",
      href: "/solutions/team",
    },
    {
      title: "Enterprise",
      description: "Enterprise-grade solutions for large organizations.",
      href: "/solutions/enterprise",
    },
    {
      title: "Custom",
      description: "Custom solutions tailored to your specific needs.",
      href: "/solutions/custom",
    },
  ],
}

export const HOME_STATS = {
  title: "Trusted by developers worldwide",
  description: "Join thousands of developers who are already using our platform to build better software.",
  items: [
    { name: "Active Users", value: "100,000+" },
    { name: "Lines of Code", value: "1M+" },
    { name: "Pull Requests", value: "500K+" },
    { name: "Code Reviews", value: "250K+" },
  ],
}

export const HOME_CTA = {
  title: "Ready to get started?",
  description: "Join us today and experience the future of AI-powered development.",
  cta: {
    primary: {
      text: "Get Started",
      href: "/signup",
    },
    secondary: {
      text: "Contact Sales",
      href: "/contact",
    },
  },
} 