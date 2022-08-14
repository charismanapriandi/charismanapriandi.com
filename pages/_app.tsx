import type { AppProps } from 'next/app'
import { Global, ThemeProvider, useTheme } from '@emotion/react'
import { darkTheme, theme } from 'config/theme'
import ColorSchemeProvider, { ColorSchemeContext } from 'context/ColorScheme'
import { FC, useContext } from 'react'
import globalStyles from 'styles/global'
import AuthContextProvider from 'context/AuthContext'

function App(props: AppProps) {
  return (
    <ColorSchemeProvider>
      <AuthContextProvider>
        <ThemeController {...props}/>
      </AuthContextProvider>
    </ColorSchemeProvider>
  )
}

const ThemeController: FC<AppProps> = ({Component, pageProps}) => {
  const {colorScheme} = useContext(ColorSchemeContext)
  
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
