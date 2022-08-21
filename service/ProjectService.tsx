import { AxiosResponse } from "axios";
import { instance } from "config/api";
import { useEffect, useState } from "react";

interface IUseProjectService {
  shouldGetData: boolean;
}

/**
 * 
 * @param shouldGetData default false
 * @returns 
 */
export const useProjectService = ({shouldGetData = false}: IUseProjectService) => {
  const [projects, setProjects] = useState<Response.Project.Get[]>([])
  
  useEffect(() => {
    if (shouldGetData) {
      (async () => {
        await instance({
          method: 'GET',
          url: '/project'
        })
        .then((res: AxiosResponse<Response.Project.Get[]>) => {
          setProjects(res.data)
        })
        .catch(err => {
          throw new Error('Somethong went wrong')
        })
      })()
    }
  }, [shouldGetData])

  return { projects }
}
