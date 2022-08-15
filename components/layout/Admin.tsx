import styled from "@emotion/styled";
import { FC, memo } from "react";
import { Sidebar, Navbar } from "@/components";

const Admin: FC<Components.Layout.Admin> = ({children}) => {
  return (
    <Layout>
      <Sidebar />
      <div css={{flex: 1}}>
        <Navbar.Admin />
        <div css={{padding: '100px 20px 0 20px'}}>
          {children}
        </div>
      </div>
    </Layout>
  )
}

const Layout = styled.div(() => ({
  display: 'flex',
}))

export default memo(Admin);