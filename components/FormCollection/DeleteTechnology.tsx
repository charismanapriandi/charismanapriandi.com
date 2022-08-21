import useService from "hook/useService";
import { FC, memo, useEffect } from "react";
import { Modal, Text, Icon, Button, Loading } from "@/components";
import { API_URL } from "config/api";
import { toast } from "react-toastify";

const DeleteTechnology: FC<Components.ModalForm<Data.Technology>> = ({isOpen, close, callback, payload}) => {
  const {instance: removeTagInstance, data, isRequesting} = useService<Response.Technology.Delete>()

  const deleteTechnology = async () => {
    await removeTagInstance({
      method: 'DELETE',
      url: API_URL.TECHNOLOGY.CRUD,
      params: {
        uuid: payload?.uuid
      }
    })
  }

  useEffect(() => {
    if (data) {
      toast.success(data.message)
      !!callback && callback()
      close()
    }
  }, [data, callback, close])
  
  return (
    <Modal isOpen={isOpen}>
      <Modal.Card>
        <Modal.Header>
          <Text color="primary">Delete {payload?.name}</Text>
          <Icon.Times size={24} onClick={close} />
        </Modal.Header>
        <Modal.Body>
          <Text>Are you sure you want to delete this technology?</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={isRequesting} color="error" onClick={deleteTechnology}>
            {isRequesting ? <Loading /> : 'Delete'}
          </Button>
        </Modal.Footer>
      </Modal.Card>
    </Modal>
  )
}

export default memo(DeleteTechnology);