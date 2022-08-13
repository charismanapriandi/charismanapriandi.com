import { Container } from "@/components";
import { FC, memo, ReactNode } from "react";
import Navbar from "../Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Primary: FC<LayoutProps> = ({children}) => (
  <div>
    <Navbar />
    <Container.Default>
      {children}
    </Container.Default>
  </div>
)

Primary.displayName = 'LayoutPrimary'

export default memo(Primary);