import { Layout } from "@/components"
import withProtect from "hoc/withProtect"

const Admin = () => {
  return (
    <Layout.Admin>
      Detail
    </Layout.Admin>
  )
}

export default withProtect(Admin)