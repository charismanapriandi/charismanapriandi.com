import { Button, Icon, Layout, Table } from "@/components"
import withProtect from "hoc/withProtect"
import Link from "next/link"

const rows = [
  {
    id: '1',
    name: 'Javascript',
    url: 'https://google.com'
  },
  {
    id: '2',
    name: 'Python',
    url: 'https://google.com'
  }
]

const Technology = () => {
  return (
    <Layout.Admin>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Th>id</Table.Th>
            <Table.Th>name</Table.Th>
            <Table.Th>url</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>
                <Link href={item.url} passHref>
                  <a target='_blank'>{item.url}</a>
                </Link>
              </Table.Cell>
              <Table.Cell inline>
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

export default withProtect(Technology)