import styled from '@emotion/styled';
import { FC, memo, useEffect, useRef, useState } from 'react';
import { Container, Icon, Row, SocialMediaList, ThemeSwitcher2, Text, Divider } from '@/components';
import { motion } from 'framer-motion'
import { css, Theme, useTheme } from '@emotion/react';
import Link from 'next/link';
import useClickOutside from 'hook/useClickDetection';

const Navbar: FC<any> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const theme = useTheme();
  const menuRef = useRef(null)
  
  const handleCloseMenu = () => setIsOpen(false)
  const toggleMenu = () => setIsOpen(prev => !prev)
  
  useClickOutside(menuRef, handleCloseMenu)
  
  
  return (
    <>
      <Nav>
        <Container.Large css={{pointerEvents: 'none'}}>
          <Row
            alignItems='center' 
            justifyContent='flex-end'>
            <div css={menuWrapperCss} ref={menuRef}>
              <Icon.Menu css={{
                padding: '5px', 
                transition: 'all .3s ease-in-out',
                borderRadius: '5px',
                boxShadow: isOpen 
                  ? `0 0 0 3px ${theme.palette.color.primary}7F` 
                  : 'none'
                }} 
                onClick={toggleMenu} 
                size={35}/>
              <motion.div
                animate={isOpen ? menuMotion.animate : menuMotion.initial}
                css={dropMenuCss}>
                <Text 
                  css={{marginBottom: '15px'}} 
                  weight={500} 
                  color='primary' 
                  size='small'>
                  Theme Preferences
                </Text>
                <ThemeSwitcher2 />
              </motion.div>
            </div>
          </Row>
        </Container.Large>
      </Nav>
      <div css={{
        position: 'fixed',
        width: '100%',
        bottom: '15px',
        pointerEvents: 'none',
      }}>
        <Container.Large>
          <SocialMediaList />
        </Container.Large>
      </div>
    </>
  )
}

const dropMenuCss = (theme: Theme) => css({
  backgroundColor: theme.palette.background.secondary,
  padding: theme.padding,
  position: 'absolute',
  cursor: 'auto',
  borderRadius: theme.borderRadius,
  right: 0,
  border: `1px solid ${theme.palette.color.border}`,
  width: '280px',
  opacity: 0,
})

const menuMotion = {
  initial: {
    opacity: 0,
    scale: 0,
    x: 200,
    origin: 'right',
    transition: {
      type: "spring",
    }
  },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    origin: 'right',
    transition: {
      type: "spring",
    }
  }
}

const menuWrapperCss = css({
  pointerEvents: 'auto', 
  cursor: 'pointer',
  position: 'relative',
})

const triggerTransition = css({
  type: 'tween', 
  duration: .2,
  ease: 'linear',
})

const Nav = styled('nav')(({theme}) => ({
  position: 'fixed',
  width: '100%',
  padding: '15px 0',
}))

export default memo(Navbar);