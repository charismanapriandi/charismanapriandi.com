import styled from "@emotion/styled";
import { FC } from "react";
import { memo } from "react"
import { Icon } from ".";

const Sidebar: FC<Components.Sidebar> = ({isActive, handleClose}) => {
  return (
    <SidebarStyled isActive={isActive}>
      {/* <Icon.Times /> */}
      <span css={{display: 'block', textAlign:'right'}} onClick={handleClose}>Close</span>
    </SidebarStyled>
  )
}

export default memo(Sidebar);

interface SidebarStyled {
  isActive: boolean;
}

const SidebarStyled = styled.aside<SidebarStyled>(({isActive, theme}) => ({
  position: 'fixed',
  padding: '20px',
  width: '40%',
  zIndex: 10000,
  borderLeft: `1px solid ${theme.palette.color.border}`,
  transition: 'all .3s ease-in-out',
  height: '100vh',
  backgroundColor: theme.palette.background.primary,
  top: 0,
  right: isActive ? '0%' : '-40%',
}))