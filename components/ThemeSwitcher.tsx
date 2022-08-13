import { useCallback, useContext, useEffect } from "react";
import { Icon, Row, Toggle } from "@/components";
import styled from "@emotion/styled";
import { ColorSchemeContext } from "context/ColorScheme";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
  const {colorScheme, setColorScheme} = useContext(ColorSchemeContext)
  const isOn = colorScheme === 'dark'
  
  const toggleSwitch = useCallback(() => {
    if (colorScheme === 'dark') {
      setColorScheme('light')
      window.localStorage.setItem('theme', 'light')
    }
    if (colorScheme === 'light') {
      setColorScheme('dark')
      window.localStorage.setItem('theme', 'dark')
    }
  }, [colorScheme, setColorScheme])

  return (
    <Row alignItems="center" gap={10}>
      <Icon.Sun size={24} />
      <CustomSwitch onClick={toggleSwitch} isOn={isOn}>
        <MotionHandle layout transition={handleTransition}/>
      </CustomSwitch> 
      <Icon.Moon size={24} />
    </Row>
  )
}

const CustomSwitch = styled(Toggle)(({theme}) => ({
  backgroundColor: theme.palette.color.primary
}))

const MotionHandle = Toggle.Handle.withComponent(motion.div)

const handleTransition = {
  type: 'spring',
  stiffness: 200,
  damping: 15
}

ThemeSwitcher.defaultName = 'Theme Switcher'

export default ThemeSwitcher;
