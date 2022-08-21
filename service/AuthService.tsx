import { AxiosError, AxiosResponse } from "axios"
import { instance } from "config/api"
import { AuthContext } from "context/AuthContext"
import { useContext } from "react"
import { toast } from "react-toastify"
import { LoginValues } from "schema/login"

const useAuthService = () => {
  const {setIsLogined, setUser} = useContext(AuthContext)

  async function login (values: LoginValues) {
    await instance({
      method: 'POST',
      url: '/auth/login',
      data: values,
    })
    .then((res: AxiosResponse<Response.Auth.Login.Success>) => {
      setIsLogined(true)
      setUser({
        email: res.data.user.email,
        name: res.data.user.name,
        phone: res.data.user.phone,
        username: res.data.user.name,
        uuid: res.data.user.uuid,
      })
      localStorage.setItem('access_token', res.data.access_token)
    })
    .catch((err: any) => {
      const error = err as AxiosError<Response.Auth.Login.Error>
      if (error.code === 'ERR_NETWORK') {
        return toast.error(error.message)
      }
      if (error.response?.status === 401) {
        return toast.error(error.response.data.message)
      }
      return toast.error('something went wrong')
    })
  }

  async function logout() {
    setIsLogined(false)
    setUser(null)
    localStorage.removeItem('access_token')
  }
  
  return {
    login,
    logout
  }
}

export default useAuthService;