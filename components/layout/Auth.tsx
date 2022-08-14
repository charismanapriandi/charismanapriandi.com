import styled from "@emotion/styled";
import { FC, memo } from "react";
import { Container } from ".."

interface AuthProps {
  children: React.ReactNode;
}

const Auth: FC<AuthProps> = ({children}) => {
  return (
    <Container.Default
      css={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        minHeight: '100vh'
      }}>
      {children}
    </Container.Default>
  )
}

Auth.displayName = 'LayoutAuth'

export default memo(Auth)