import { Section } from "@/app/components/atoms/Section"
import { Stack } from "@/app/components/atoms/Stack"
import { TextGroup } from "@/app/components/atoms/TextGroup"
import { Text } from "@/app/components/atoms/Text"

export default function ContactPage() {
  return (
    <Section spacing="xl">
      <Stack gap="xl">
        <TextGroup
          title="Contact Us"
          description="Get in touch with our team for inquiries, support, or to discuss how we can help transform your business."
          titleSize="4xl"
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <Stack className="bg-card rounded-lg shadow-lg p-8">
            <TextGroup
              title="Send us a Message"
              titleSize="2xl"
              align="left"
            />
            <form className="mt-6 space-y-6">
              <Stack gap="sm">
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="John Doe"
                />
              </Stack>

              <Stack gap="sm">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="john@example.com"
                />
              </Stack>

              <Stack gap="sm">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="How can we help you?"
                />
              </Stack>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </Stack>

          {/* Contact Information */}
          <Stack gap="lg">
            <Stack className="bg-card rounded-lg shadow-lg p-8">
              <TextGroup
                title="Contact Information"
                titleSize="2xl"
                align="left"
              />
              <Stack gap="lg" className="mt-6">
                <Stack gap="sm">
                  <Text size="lg" weight="medium">Address</Text>
                  <Text color="muted">
                    123 Business Street<br />
                    Tech District<br />
                    City, State 12345
                  </Text>
                </Stack>

                <Stack gap="sm">
                  <Text size="lg" weight="medium">Email</Text>
                  <Text color="muted">
                    info@company.com<br />
                    support@company.com
                  </Text>
                </Stack>

                <Stack gap="sm">
                  <Text size="lg" weight="medium">Phone</Text>
                  <Text color="muted">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </Stack>
    </Section>
  )
} 