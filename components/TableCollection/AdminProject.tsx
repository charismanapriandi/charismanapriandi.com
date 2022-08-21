import { memo, useCallback, useEffect, useState } from "react"
import { Button, Image, FormCollection, Table, Row, Icon } from "@/components";
import useService from "hook/useService";
import { API_URL } from "config/api";

const AdminProject = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState<boolean>(false)
  const [payload, setPayload] = useState<Response.Project.Get>()

  const {instance, data} = useService<Array<Response.Project.Get>>()
  
  const openCreateForm = () => {
    setIsFormOpen(true)
    setPayload(undefined)
  }
  const openUpdateForm = (payload: Response.Project.Get) => {
    setIsFormOpen(true)
    setPayload(payload)
  }
  const closeForm = useCallback(() => {
    setIsFormOpen(false)
    setPayload(undefined)
  }, [setPayload, setIsFormOpen])
  
  const openDeleteConfirm = (payload: Response.Project.Get) => {
    setIsDeleteConfirmOpen(true)
    setPayload(payload)
  }
  const closeDeleteConfirm = useCallback(() => {
    setIsDeleteConfirmOpen(false)
    setPayload(undefined)
  }, [setPayload, setIsDeleteConfirmOpen])

  const fetch = useCallback(async () => {
    await instance({
      method: 'GET',
      url: API_URL.PROJECT.MINE,
    })
  }, [instance])

  useEffect(() => {
    fetch();
  }, [fetch])

  return (
    <>
      <Button onClick={openCreateForm} variant="text" css={{marginBottom: '20px'}}>
        Create
      </Button>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Logo</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Description</Table.HeadCell>
            <Table.HeadCell>Tag</Table.HeadCell>
            <Table.HeadCell>Technologies</Table.HeadCell>
            <Table.HeadCell>CreatedAt</Table.HeadCell>
            <Table.HeadCell>UpdatedAt</Table.HeadCell>
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
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.tag}</Table.Cell>
              <Table.Cell fit>
                <Row flexWrap="wrap" alignItems="center" gap={10}>
                  {item.technologies.map((technology, idx) => (
                    <Image key={idx} isExternalResource src={technology.logo} alt={technology.name} width={30} height={30} />
                  ))}
                </Row>
              </Table.Cell>
              <Table.Cell fit>
                {new Date(item.createdAt).toLocaleString()}
              </Table.Cell>
              <Table.Cell fit>
                {new Date(item.updatedAt).toLocaleString()}
              </Table.Cell>
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
      <FormCollection.CreateUpdateProject isOpen={isFormOpen} close={closeForm} callback={fetch} payload={payload} />
      <FormCollection.DeleteProject close={closeDeleteConfirm} isOpen={isDeleteConfirmOpen} callback={fetch} payload={payload} />
    </>
  )
}

export default memo(AdminProject)