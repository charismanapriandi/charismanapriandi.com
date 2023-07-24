import { Container, Navbar, Footer } from "@/components";
import { css } from "@emotion/react";
import { FC, memo, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  isPaddingTop?: boolean
}

const Primary: FC<LayoutProps> = ({children, isPaddingTop = true}) => (
  <div css={layoutCss}>
    <Navbar />
    {children}
    <Footer />
  </div>
)

const layoutCss = css({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

Primary.displayName = 'LayoutPrimary'

export default memo(Primary);