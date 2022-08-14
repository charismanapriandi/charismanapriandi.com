import { Layout } from "@/components"
import withProtect from "hoc/withProtect"

const Admin = () => {
  return (
    <Layout.Primary>
      admin page
    </Layout.Primary>
  )
}

export default withProtect(Admin)