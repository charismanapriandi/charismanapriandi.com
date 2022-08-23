import { Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { ColorSchemeContext } from "context/ColorScheme";
import Image from "next/image";
import { useContext } from "react";
import { Icon } from ".";
import Grid from "./Grid";
import Text from "./Text";

type Mode = 'dark' | 'light'
interface ThemeProps {
  isOn: boolean;
}

const ThemeSwitcher2 = () => {
  const {colorScheme, setColorScheme} = useContext(ColorSchemeContext)
  const theme = useTheme()

  const handleMode = (mode: Mode) => {
    setColorScheme(mode)
    window.localStorage.setItem('theme', mode)
  }

  return (
    <Grid gap={10} isAutoFit={false} column={{default: 2}}>
      <div>
        <ThemeContainer isOn={colorScheme === 'light'}>
          <Image
            css={{
              cursor: 'pointer', 
            }}
            onClick={() => handleMode('light')}
            src='/theme-light.png'
            alt='light theme'
            objectFit="contain"
            layout='fill' />
        </ThemeContainer>
        <Text 
          color={
            colorScheme === 'light' 
              ? 'highlight' 
              : 'secondary'
          } 
          size='small' 
          weight={500} 
          textAlign='center'>
          Light
        </Text>
      </div>
      <div>
        <ThemeContainer isOn={colorScheme === 'dark'}>
          <Image
            css={{
              cursor: 'pointer',
            }}
            onClick={() => handleMode('dark')}
            src='/theme-dark.png'
            objectFit="contain"
            alt='dark theme'
            layout="fill" />
        </ThemeContainer>
        <Text
          color={
            colorScheme === 'dark' 
              ? 'highlight' 
              : 'secondary'
          } 
          size='small' 
          weight={500} 
          textAlign='center'>
          Dark
        </Text>
      </div>
    </Grid>
  )
}

const ThemeContainer = styled.div<ThemeProps>(({theme, isOn}) => ({
  boxShadow: isOn ? `0 0 0 3px ${theme.palette.color.primary}` : '0 0 0 0 transparent',
  borderRadius: '8px',
  transition: 'all .3s ease-in-out',
  backgroundClip: 'padding-box',
  width: '100px', 
  height: '60px', 
  position: 'relative',
  marginBottom: '5px'
}))

export default ThemeSwitcher2;