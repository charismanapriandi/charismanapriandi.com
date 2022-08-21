import { API_URL } from "config/api";
import useService from "hook/useService";
import { memo, useCallback, useEffect, useState } from "react";
import { Table, Button, Image, FormCollection, Row, Icon, Anchor } from "@/components";

const AdminTechnology = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  const [isConfirmOpen, setIsConfirmOpen] = useState<boolean>(false)
  const [payload, setPayload] = useState<Data.Technology>()

  const {instance: technologyInstance, isRequesting, data, error} = useService<Response.Technology.GetAll[]>()
  
  const openCreateForm = () => {
    setPayload(undefined)
    setIsFormOpen(true)
  }
  const openUpdateForm = (payload: Data.Technology) => {
    setPayload(payload)
    setIsFormOpen(true)
  }
  const closeForm = useCallback(() => {
    setPayload(undefined)
    setIsFormOpen(false)
  }, [setPayload, setIsFormOpen])
  const openDeleteConfirm = (payload: Data.Technology) => {
    setPayload(payload)
    setIsConfirmOpen(true)
  }
  const closeConfirm = useCallback(() => {
    setPayload(undefined)
    setIsConfirmOpen(false)
  }, [setPayload, setIsConfirmOpen])
  
  const fetch = useCallback(async () => {
    await technologyInstance({
      method: 'GET',
      url: API_URL.TECHNOLOGY.CRUD
    })
  }, [technologyInstance])

  useEffect(() => {
    fetch()
  }, [fetch])
  
  return (
    <>
      <Button variant="text" css={{marginBottom: '20px'}} onClick={openCreateForm}>Create</Button>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Logo</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Tag</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {!!data && data.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>
                <Image isExternalResource src={item.logo} alt={item.name} width={30} height={30} />
              </Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.tag}</Table.Cell>
              <Table.Cell fit>
                <Row alignItems='center' gap={10}>
                  <Button.Icon onClick={() => openUpdateForm(item)} size={30}>
                    <Icon.Pencil size={24} />
                  </Button.Icon>
                  <Button.Icon onClick={() => openDeleteConfirm(item)} size={30} color="error">
                    <Icon.Trash size={24} />
                  </Button.Icon>
                  <a href={item.url} target='_blank' rel='noreferrer'>
                    <Button variant='text'>
                      Visit
                    </Button>
                  </a>
                </Row>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <FormCollection.CreateUpdateTechnology isOpen={isFormOpen} close={closeForm} payload={payload} callback={fetch} />
      <FormCollection.DeleteTechnology isOpen={isConfirmOpen} close={closeConfirm} payload={payload} callback={fetch} />
    </>
  )
}

export default memo(AdminTechnology);