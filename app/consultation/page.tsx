"use client"

import { useState, FormEvent, ChangeEvent } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Textarea } from "@/app/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select"
import { useToast } from "@/app/components/ui/use-toast"
import { Calendar, Clock, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"

interface FormData {
  name: string
  email: string
  company: string
  type: string
  teamSize: string
  message: string
}

const consultationTypes = [
  {
    id: "ai-strategy",
    title: "AI Strategy Consultation",
    description: "Develop a comprehensive AI strategy for your business",
    duration: "90 minutes",
  },
  {
    id: "tech-assessment",
    title: "Technical Assessment",
    description: "Evaluate your current technical infrastructure",
    duration: "60 minutes",
  },
  {
    id: "implementation",
    title: "Implementation Planning",
    description: "Plan the implementation of AI solutions",
    duration: "120 minutes",
  },
]

export default function ConsultationPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    type: "",
    teamSize: "",
    message: "",
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.type) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Consultation Request Submitted",
      description: "We'll contact you shortly to confirm your consultation.",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      type: "",
      teamSize: "",
      message: "",
    })
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <div className="container py-10">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Book a Consultation</h1>
        <p className="text-xl text-muted-foreground">
          Schedule a consultation with our AI experts to transform your business
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          {consultationTypes.map((type) => (
            <Card key={type.id} className="cursor-pointer hover:shadow-lg">
              <CardHeader>
                <CardTitle>{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {type.duration}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    Available Online
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Request Consultation</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Inc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Consultation Type *</Label>
                  <Select
                    value={formData.type}
                    onValueChange={(value: string) =>
                      setFormData((prev) => ({ ...prev, type: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select consultation type" />
                    </SelectTrigger>
                    <SelectContent>
                      {consultationTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="teamSize">Team Size</Label>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <Select
                      value={formData.teamSize}
                      onValueChange={(value: string) =>
                        setFormData((prev) => ({ ...prev, teamSize: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project and requirements..."
                    className="min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Request Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 