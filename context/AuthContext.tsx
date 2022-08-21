import { API_URL } from "config/api";
import useService from "hook/useService";
import React, { createContext, Dispatch, FC, SetStateAction, useEffect, useState } from "react";

type User = {
  uuid: string;
  name: string;
  username: string;
  email: string;
  phone: string;

} 

interface AuthContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>
  isLogined: boolean;
  setIsLogined: Dispatch<SetStateAction<boolean>>
  login: (payload: User) => void;
  logout: () => void;
}

const defaultValue: AuthContext = {
  user: null,
  setUser: () => {},
  setIsLogined: () => {},
  isLogined: false,
  login() {},
  logout() {},
}

export const AuthContext = createContext<AuthContext>(defaultValue)

const AuthContextProvider: FC<{children:React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLogined, setIsLogined] = useState<boolean>(false)

  const logout = () => {
    setUser(null)
    setIsLogined(false)
  }

  const login = (payload: User) => {
    setUser(payload)
    setIsLogined(true)
  }
  
  const { instance, data } = useService<Response.User.Profile>()

  useEffect(() => {
    (async function fetch() {
      await instance({
        url: API_URL.USER.PROFILE,
        method: 'GET'
      })
    })();
  }, [instance])

  useEffect(() => {
    if (!!data) {
      setIsLogined(true)
      setUser(data)
    }
  }, [data])
  
  return (
    <AuthContext.Provider value={{ user, setUser, isLogined, setIsLogined, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;