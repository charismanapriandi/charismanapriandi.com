import withProtect from "hoc/withProtect"
import { useRouter } from "next/router"
import { useEffect } from "react"

const Admin = () => {
  const { push } = useRouter()
  
  useEffect(() => {
    push({pathname: '/admin/project'})
  }, [push])
  
  return <></>
}

export default withProtect(Admin)