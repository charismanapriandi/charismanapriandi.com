import styled from '@emotion/styled';
import { FC, memo } from 'react';
import { Container, Icon, Row, SocialMediaList, ThemeSwitcher2, Text } from '@/components';
import { motion } from 'framer-motion'
import { css, Theme } from '@emotion/react';

const Navbar: FC<any> = () => {
  return (
    <>
      <Nav>
        <Container.Large css={{pointerEvents: 'none'}}>
          <Row
            alignItems='center' 
            justifyContent='flex-end'>
            <motion.div
              css={triggerCss} 
              layout
              animate='initial'
              initial='initial'
              whileHover='hover'
              transition={triggerTransition}>
              <Icon.Menu size={25}/>
              <motion.div
                variants={menuMotion}
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
            </motion.div>
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
  maxWidth: '300px',
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
  hover: {
    opacity: 1,
    scale: 1,
    x: 0,
    origin: 'right',
    transition: {
      type: "spring",
    }
  }
}

const triggerCss = css({
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