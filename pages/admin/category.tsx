import { Button, Icon, Layout, Row, Table } from "@/components"
import withProtect from "hoc/withProtect"

const rows = [
  {
    id: '1',
    name: 'Web Development',
    type: 'project'
  },
  {
    id: '2',
    name: 'Programming Language',
    type: 'technology'
  }
]

const Category = () => {
  return (
    <Layout.Admin>
      <Button.Primary css={{marginBottom: '30px'}}>Create</Button.Primary>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Th>id</Table.Th>
            <Table.Th>name</Table.Th>
            <Table.Th>type</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
              <Table.Cell>
                <Button.Icon size={30}>
                  <Icon.Pencil size={20} />
                </Button.Icon>
                <Button.Icon size={30} color='error'>
                  <Icon.Trash size={20} />
                </Button.Icon>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Layout.Admin>
  )
}

export default withProtect(Category)