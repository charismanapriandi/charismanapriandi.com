import React, { createContext, Dispatch, FC, SetStateAction, useState } from "react";

type User = {
  name: string;
  username: string;
  uuid: string;
} 

interface AuthContext {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>
  isLogined: boolean;
  setIsLogined: Dispatch<SetStateAction<boolean>>
}

const defaultValue: AuthContext = {
  user: null,
  setUser: () => {},
  setIsLogined: () => {},
  isLogined: false,
}

export const AuthContext = createContext<AuthContext>(defaultValue)

const AuthContextProvider: FC<{children:React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLogined, setIsLogined] = useState<boolean>(true)

  return (
    <AuthContext.Provider value={{ user, setUser, isLogined, setIsLogined }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;