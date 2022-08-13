import { Layout } from "@/components"
import { useRouter } from "next/router";

const WorkDetail = () => {
  const router = useRouter()
  
  return (
    <Layout.Primary>
      {router.query.uuid}
    </Layout.Primary>
  )
}

export default WorkDetail;