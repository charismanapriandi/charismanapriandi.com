import styled from '@emotion/styled';
import Link from 'next/link';
import { FC, memo } from 'react';
import { Container, Icon, Row, Text, SocialMediaList, ThemeSwitcher } from '@/components';

const Primary: FC<any> = () => {
  return (
    <>
      <Nav>
        <Container.Large>
          <Row alignItems='center' justifyContent='space-between'>
            <Link href='/'>
              <a css={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Icon.Logo size={35}/>
                <Text weight={500} color='primary'>Charisman Apriandi</Text>
              </a>
            </Link>
            <ThemeSwitcher />
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

const Nav = styled('nav')(({theme}) => ({
  position: 'fixed',
  backgroundColor: theme.palette.background.primary,
  zIndex: 9999,
  width: '100%',
  padding: '15px 0',
  borderBottom: `1px solid ${theme.palette.color.border}`
}))

Primary.displayName = 'NavbarPrimary'

export default memo(Primary);