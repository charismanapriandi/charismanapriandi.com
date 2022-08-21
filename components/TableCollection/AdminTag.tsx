import { API_URL } from "config/api"
import useService from "hook/useService"
import { memo, useCallback, useEffect, useState } from "react"
import { Button, Table, Icon, FormCollection } from "@/components"

const AdminTag = () => {
  const {instance: fetchTag, data: tags} = useService<Response.Tag.GetAll[]>()
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false)
  const [payload, setPayload] = useState<Data.Tag>()
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false)

  const openCreateForm = () => {
    setPayload(undefined)
    setIsFormOpen(true)
  }
  const openUpdateForm = (payload: Data.Tag) => {
    setPayload(payload)
    setIsFormOpen(true)
  }
  const closeForm = useCallback(() => {
    setPayload(undefined)
    setIsFormOpen(false)
  }, [setPayload, setIsFormOpen])
  const openDeleteForm = (payload: Data.Tag) => {
    setIsDeleteOpen(true)
    setPayload(payload)
  }
  const closeConfirm = useCallback(() => {
    setPayload(undefined)
    setIsDeleteOpen(false)
  }, [setPayload, setIsDeleteOpen])

  const fetch = useCallback(async () => {
    await fetchTag({
      method: 'GET',
      url: API_URL.TAG.CRUD
    })
  }, [fetchTag])

  useEffect(()=> {
    fetch()
  }, [fetch])

  return (
    <>
      <Button 
        onClick={openCreateForm}
        css={{marginBottom: '20px'}} 
        variant="text">
        Create
      </Button>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>name</Table.HeadCell>
            <Table.HeadCell>type</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {tags && tags.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.type}</Table.Cell>
              <Table.Cell fit>
                <div css={{display: 'flex', gap: '10px', width: 'fit-content'}}>
                  <Button.Icon onClick={() => openUpdateForm(item)} size={30}>
                    <Icon.Pencil size={20} />
                  </Button.Icon>
                  <Button.Icon onClick={() => openDeleteForm(item)} size={30} color='error'>
                    <Icon.Trash size={20} />
                  </Button.Icon>
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <FormCollection.CreateUpdateTag 
        isOpen={isFormOpen} 
        close={closeForm} 
        payload={payload} 
        callback={fetch}/>
      <FormCollection.DeleteTag 
        isOpen={isDeleteOpen}
        close={closeConfirm}
        payload={payload}
        callback={fetch}
      />
    </>
  )
}

export default memo(AdminTag)