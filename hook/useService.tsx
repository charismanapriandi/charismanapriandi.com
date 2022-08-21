import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { AuthContext } from "context/AuthContext"
import { useCallback, useContext, useState } from "react"

function useService<D = any, E = any>() {
  const [error, setError] = useState<E>()
  const [data, setData] = useState<D>()
  const [isRequesting, setIsRequesting] = useState<boolean>(false)
  const [status, setStatus] = useState<'pending' | 'error' | 'success' | 'idle'>('idle')

  const {setIsLogined, setUser} = useContext(AuthContext);
  
  const instance = useCallback(async (config: AxiosRequestConfig<any>) => {
    const token = localStorage.getItem('access_token')
    
    try {
      setIsRequesting(true)
      setStatus('pending')

      const res: AxiosResponse<D> = await axios({
        baseURL: process.env.BASE_API_URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        ...config
      })

      setStatus('success')
      setData(res.data)
      setError(undefined)
    } catch (e) {
      const err = e as AxiosError<E>
      
      if (err.response) setError(err.response.data)
      if (err.response?.status === 401) {
        setIsLogined(false)
        setUser(null)
      }

      setData(undefined)
      setStatus('error')
    } finally {
      setIsRequesting(false)
    }
  }, [setUser, setIsLogined])
  
  return {data, error, isRequesting, instance, status}
}

export default useService