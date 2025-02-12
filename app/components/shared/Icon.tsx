import { type LucideIcon } from "lucide-react"
import * as React from "react"

export interface IconProps {
  name: string
  icon: LucideIcon
  className?: string
}

export function Icon({ name, icon: Icon, className }: IconProps) {
  return (
    <div className={className}>
      <Icon aria-hidden="true" className="h-4 w-4" />
      <span className="sr-only">{name}</span>
    </div>
  )
}

export default Icon 