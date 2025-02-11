import { tokens } from '@/app/styles/design-tokens'
import { theme } from '@/app/styles/theme'
import { Card } from '@/app/components/atoms/Card'
import { Button } from '@/app/components/ui/button'

function ColorPalette() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Color Palette</h2>
      <div className="space-y-4">
        {Object.entries(tokens.colors).map(([name, shades]) => (
          <div key={name}>
            <h3 className="text-lg font-medium mb-2 capitalize">{name}</h3>
            <div className="grid grid-cols-11 gap-2">
              {Object.entries(shades).map(([shade, color]) => (
                <div key={shade} className="space-y-1">
                  <div
                    className="w-full h-12 rounded-md"
                    style={{ backgroundColor: color }}
                  />
                  <div className="text-xs text-center">{shade}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Typography() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Typography</h2>
      <div className="space-y-4">
        {Object.entries(tokens.typography.sizes).map(([name, size]) => (
          <div key={name} className="flex items-center gap-4">
            <div className="w-20 text-sm text-muted-foreground">{name}</div>
            <div style={{ fontSize: size }}>The quick brown fox jumps over the lazy dog</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Spacing() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Spacing</h2>
      <div className="space-y-4">
        {Object.entries(tokens.spacing).map(([name, size]) => (
          <div key={name} className="flex items-center gap-4">
            <div className="w-20 text-sm text-muted-foreground">{name}</div>
            <div
              className="bg-primary/20 rounded-md"
              style={{ width: size, height: '24px' }}
            />
            <div className="text-sm text-muted-foreground">{size}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Components() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">Components</h2>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Cards</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-2">Default Card</h4>
              <p className="text-muted-foreground">Basic card component example.</p>
            </div>
          </Card>
          <Card gradient>
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-2">Gradient Card</h4>
              <p className="text-muted-foreground">Card with gradient effect.</p>
            </div>
          </Card>
          <Card hover={false}>
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-2">Static Card</h4>
              <p className="text-muted-foreground">Card without hover effect.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export function StyleGuide() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">Design System</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive guide to our design tokens, components, and utilities.
          </p>
        </div>

        <ColorPalette />
        <Typography />
        <Spacing />
        <Components />
      </div>
    </div>
  )
} 