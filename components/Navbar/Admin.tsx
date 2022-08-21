import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { FC, memo } from "react"
import { ThemeSwitcher, Container } from ".."

const Admin: FC<Components.Navbar.Admin> = () => {
  return (
    <Nav>
      <Container.Large css={containerCss}>
        <ThemeSwitcher />
      </Container.Large>
    </Nav>
  )
}

const Nav = styled.nav(({theme}) => ({
  position: 'fixed',
  backgroundColor: theme.palette.background.primary,
  borderBottom: `1px solid ${theme.palette.color.border}`,
  width: '100%',
  padding: '15px'
}))

const containerCss = css({
})

Admin.displayName = 'NavbarAdmin'

export default memo(Admin)