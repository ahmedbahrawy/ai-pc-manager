import { tokens } from './design-tokens'

export const theme = {
  light: {
    background: tokens.colors.gray[50],
    foreground: tokens.colors.gray[900],
    muted: {
      background: tokens.colors.gray[100],
      foreground: tokens.colors.gray[500],
    },
    primary: {
      background: tokens.colors.primary[500],
      foreground: tokens.colors.gray[50],
    },
    secondary: {
      background: tokens.colors.gray[200],
      foreground: tokens.colors.gray[900],
    },
    accent: {
      background: tokens.colors.primary[100],
      foreground: tokens.colors.primary[900],
    },
    destructive: {
      background: 'hsl(0, 84%, 60%)',
      foreground: tokens.colors.gray[50],
    },
    border: tokens.colors.gray[200],
    input: tokens.colors.gray[200],
    ring: tokens.colors.primary[500],
  },
  dark: {
    background: tokens.colors.gray[950],
    foreground: tokens.colors.gray[50],
    muted: {
      background: tokens.colors.gray[800],
      foreground: tokens.colors.gray[400],
    },
    primary: {
      background: tokens.colors.primary[500],
      foreground: tokens.colors.gray[50],
    },
    secondary: {
      background: tokens.colors.gray[800],
      foreground: tokens.colors.gray[50],
    },
    accent: {
      background: tokens.colors.primary[900],
      foreground: tokens.colors.primary[100],
    },
    destructive: {
      background: 'hsl(0, 84%, 60%)',
      foreground: tokens.colors.gray[50],
    },
    border: tokens.colors.gray[800],
    input: tokens.colors.gray[800],
    ring: tokens.colors.primary[500],
  },
} as const

export type Theme = typeof theme 