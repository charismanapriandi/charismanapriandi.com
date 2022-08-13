const screenWidth: BreakpointScreen = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

function breakpoint(screen: keyof BreakpointScreen) {
  switch (screen) {
    case 'sm': 
      return `@media only screen and (min-width: ${screenWidth.sm}px)`
    case 'md': 
      return `@media only screen and (min-width: ${screenWidth.md}px)`
    case 'lg': 
      return `@media only screen and (min-width: ${screenWidth.lg}px)`
    case 'xl': 
      return `@media only screen and (min-width: ${screenWidth.xl}px)`
    default: 
      return undefined
  }
}

export default breakpoint