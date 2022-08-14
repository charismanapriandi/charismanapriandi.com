import { Container } from "@/components";
import { FC, memo, ReactNode } from "react";
import Navbar from "../Navbar";

interface LayoutProps {
  children: ReactNode;
  isPaddingTop?: boolean
}

const Primary: FC<LayoutProps> = ({children, isPaddingTop = true}) => (
  <div>
    <Navbar />
    <Container.Default css={{paddingTop: isPaddingTop ? '100px' : 0}}>
      {children}
    </Container.Default>
  </div>
)

Primary.displayName = 'LayoutPrimary'

export default memo(Primary);