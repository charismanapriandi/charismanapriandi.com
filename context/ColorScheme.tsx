import { createContext, Dispatch, FC, memo, ReactNode, SetStateAction, useCallback, useEffect, useState } from "react";

type ColorSchemeValue = 'dark' | 'light'

interface ColorScheme {
  colorScheme: ColorSchemeValue
  setColorScheme: Dispatch<SetStateAction<ColorSchemeValue>>
}

const defaultValue: ColorScheme = {
  colorScheme: 'light',
  setColorScheme: () => {}
}

export const ColorSchemeContext = createContext<ColorScheme>(defaultValue)

const ColorSchemeProvider: FC<{children: ReactNode}> = ({children}) => {
  const [colorScheme, setColorScheme] = useState<'dark' | 'light'>('dark')
  
  const handleColor = useCallback(() => {
    const theme = window.localStorage.getItem('theme')

    setColorScheme(
      !!theme 
        ? theme === 'dark' || theme === 'light' 
          ? theme
          : 'light'
        : 'dark')
    
    return () => setColorScheme('dark')
  }, [])
  
  useEffect(() => {
    handleColor()
  }, [handleColor])
  
  return (
    <ColorSchemeContext.Provider value={{colorScheme, setColorScheme}}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

export default ColorSchemeProvider