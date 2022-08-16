import { Button, Icon, Layout, ProjectForm, Table } from "@/components"
import { css } from "@emotion/react"
import withProtect from "hoc/withProtect"
import Image from "next/image"
import { useState } from "react"

const rows = [
  {
    id: '1',
    logo: '/javascript.png',
    name: 'Javascript',
    url: 'https://google.com'
  },
  {
    id: '2',
    logo: '/javascript.png',
    name: 'Python',
    url: 'https://google.com'
  }
]

const Project = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  
  const openForm = () => setIsFormOpen(prev => !prev)

  return (
    <Layout.Admin>
      <Button.Primary css={{marginBottom: '30px'}}>Create</Button.Primary>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Th>id</Table.Th>
            <Table.Th>Logo</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Description</Table.Th>
            <Table.Th>Type</Table.Th>
            <Table.Th>Technologies</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>
                <Image src={item.logo} width={30} height={30} alt={item.name} />
              </Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>desc</Table.Cell>
              <Table.Cell>{item.url}</Table.Cell>
              <Table.Cell>
                <Image css={css({marginRight: '10px'})} src={item.logo} width={30} height={30} alt={item.name} />
                <Image src={item.logo} width={30} height={30} alt={item.name} />
              </Table.Cell>
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
      <ProjectForm isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
    </Layout.Admin>
  )
}

export default withProtect(Project)