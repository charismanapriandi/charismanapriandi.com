import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app'
import { Global, ThemeProvider } from '@emotion/react'
import { darkTheme, theme } from 'config/theme'
import ColorSchemeProvider, { ColorSchemeContext } from 'context/ColorScheme'
import { FC, useContext } from 'react'
import globalStyles from 'styles/global'
import Toaster from 'components/Toaster'

function App(props: AppProps) {
  return (
    <ColorSchemeProvider>
      <ThemeController {...props}/>
    </ColorSchemeProvider>
  )
}

const ThemeController: FC<AppProps> = ({Component, pageProps}) => {
  const {colorScheme} = useContext(ColorSchemeContext)
  
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
      <Toaster />
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
