import { type LucideIcon } from "lucide-react"

export interface IconProps extends React.ComponentPropsWithoutRef<"svg"> {
  name: string
  icon: LucideIcon
} 