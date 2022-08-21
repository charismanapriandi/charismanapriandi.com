import { Layout, TableCollection } from "@/components"
import withProtect from "hoc/withProtect"

const Project = () => (
  <Layout.Admin>
    <TableCollection.AdminProject />
  </Layout.Admin>
)

export default withProtect(Project)