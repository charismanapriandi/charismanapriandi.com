import { Brand, Layout } from "@/components";
import LoginForm from "components/LoginForm";
import { AuthContext } from "context/AuthContext";
import React, { useContext } from "react";

function withProtect(WrappedComponent: React.FunctionComponent) {
  return function Controller(props: any) {
    const {user, setUser, isLogined, setIsLogined} = useContext(AuthContext)
    
    if (!isLogined) return <Layout.Auth><Brand /><LoginForm /></Layout.Auth>
    
    return <WrappedComponent {...props} />
  }
}

export default withProtect