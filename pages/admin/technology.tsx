import { Layout, TableCollection } from "@/components"
import withProtect from "hoc/withProtect"

const Technology = () => {
  return (
    <Layout.Admin>
      <TableCollection.AdminTechnology />
    </Layout.Admin>
  )
}

export default withProtect(Technology)