import { Button, CategoryForm, Icon, Layout, Modal, Row, Table } from "@/components"
import withProtect from "hoc/withProtect"
import { useState } from "react"

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
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  
  const openForm = () => setIsFormOpen(prev => !prev)
  
  return (
    <Layout.Admin>
      <Button.Primary onClick={openForm} css={{marginBottom: '30px'}}>Create</Button.Primary>
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
              <Table.Cell fit>
                <div css={{display: 'flex', gap: '10px', width: 'fit-content'}}>
                  <Button.Icon onClick={openForm} size={30}>
                    <Icon.Pencil size={20} />
                  </Button.Icon>
                  <Button.Icon size={30} color='error'>
                    <Icon.Trash size={20} />
                  </Button.Icon>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <CategoryForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
    </Layout.Admin>
  )
}

export default withProtect(Category)