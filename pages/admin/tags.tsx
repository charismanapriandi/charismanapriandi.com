import { Layout, TableCollection } from "@/components"
import withProtect from "hoc/withProtect"

const Tags = () => {
  return (
    <Layout.Admin>
      <TableCollection.AdminTag />
    </Layout.Admin>
  )
}

export default withProtect(Tags)