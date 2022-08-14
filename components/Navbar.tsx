/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';
import { memo } from 'react';
import { Container, Icon, Row, Text, SocialMediaList, ThemeSwitcher } from '@/components';
import { motion } from 'framer-motion';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

const Navbar = () => {
  // const [isExpand, setIsExpand] = useState<boolean>(false);

  // const handleExpand = () => setIsExpand(prev => !prev)
  
  return (
    <>
      <Nav>
        <Container.Large>
          {/* <Menu data-expand={isExpand}>
            <Row as='span' justifyContent='flex-end' alignItems='center' gap={20}>
              <Text>Home</Text>
              <Text>Works</Text>
              <Text>About</Text>
              <Text>Contact</Text>
              <ThemeSwitcher />
            </Row>
          </Menu> */}
          <Row alignItems='center' justifyContent='space-between'>
            <Link href='/'>
              <a css={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Icon.Logo size={35}/>
                <Text weight={500} color='primary'>Charisman Apriandi</Text>
              </a>
            </Link>
            <ThemeSwitcher />
            {/* <Icon.Menu css={{cursor: 'pointer'}} onClick={handleExpand} /> */}
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

// const MotionNavbar = styled(motion.nav)(({theme}) => ({
//   position: 'fixed',
//   backgroundColor: theme.palette.background.primary,
//   zIndex: 9999,
//   width: '100%',
//   padding: '15px 0',
//   borderBottom: `1px solid ${theme.palette.color.border}`
// }))

const Nav = styled('nav')(({theme}) => ({
  position: 'fixed',
  backgroundColor: theme.palette.background.primary,
  zIndex: 9999,
  width: '100%',
  padding: '15px 0',
  borderBottom: `1px solid ${theme.palette.color.border}`
}))

// const Menu = styled.div(({theme}) => ({
//   backgroundColor: theme.palette.background.primary,
//   paddingBottom: 0,
//   overflow: 'hidden',
//   maxHeight: 0,
//   '&[data-expand="true"]': {
//     marginBottom: '20px',
//     maxHeight: '50px',
//     paddingBottom: '20px',
//   }
// }))



export default memo(Navbar);