const screenWidth = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  '2xl': 1500,
}

type BreakpointScreen = "sm" | "md" | "lg" | 'xl' | '2xl'

function breakpoint(screen: BreakpointScreen) {
  switch (screen) {
    case 'sm': 
      return `@media only screen and (min-width: ${screenWidth.sm}px)`
    case 'md': 
      return `@media only screen and (min-width: ${screenWidth.md}px)`
    case 'lg': 
      return `@media only screen and (min-width: ${screenWidth.lg}px)`
    case 'xl': 
      return `@media only screen and (min-width: ${screenWidth.xl}px)`
    case '2xl': 
      return `@media only screen and (min-width: ${screenWidth['2xl']}px)`
    default: 
      return undefined
  }
}

export default breakpoint