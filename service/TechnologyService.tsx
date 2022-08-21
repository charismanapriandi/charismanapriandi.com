import { AxiosError, AxiosResponse } from "axios";
import { getToken, instance } from "config/api";
import { AuthContext } from "context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TechnologyValues } from "schema/technology";

interface IUseTechnologyService {
  shouldGetData: boolean;
}

/**
 * 
 * @param shouldGetData default false
 * @returns 
 */
export const useTechnologyService = ({shouldGetData = false}: IUseTechnologyService) => {
  const {logout} = useContext(AuthContext)

  const [technologies, setTechnologies] = useState<Data.Technology[]>([])
  
  useEffect(() => {
    if (shouldGetData) {
      (async () => {
        await instance({
          method: 'GET',
          url: '/technology'
        })
        .then(res => {
          setTechnologies(res.data)
        })
        .catch(err => {
          throw new Error('Somethong went wrong')
        })
      })()
    }
  }, [shouldGetData])

  const create = async (values: TechnologyValues) => {
    await instance({
      method: 'POST',
      url: '/technology',
      data: values,
      headers: {
        'Authorization': `Bearer ${getToken()}`
      }
    })
    .then((res: AxiosResponse<Response.Technology.Create>) => {
      toast.success(res.data.message)
      return res
    })
    .catch(err => {
      const error = err as AxiosError<Response.Unauthorized>

      if (error.response?.data.statusCode === 401) {
        logout()
      }
    })
  }
  
  return { technologies, create }
}
