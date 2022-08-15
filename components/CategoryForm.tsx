import { useFormik } from "formik"
import { FC, memo } from "react"
import CategorySchema from "schema/category"
import { Button, Modal, Form, Field, Icon } from "."

const initialValues: FormSchema.Category.Create = {
  name: '',
  type: '',
}

const CategoryForm: FC<Components.ModalForm> = ({isOpen, setIsOpen}) => {
  const submitForm = () => {}
  
  const formik = useFormik<FormSchema.Category.Create>({
    initialValues: initialValues,
    onSubmit: submitForm,
    validationSchema: CategorySchema,
    validateOnChange: false,
  })
  
  return (
    <Modal isOpen={isOpen}>
      <Modal.Card as='form' onSubmit={formik.handleSubmit as any}>
        <Modal.Header>
          Create Category
          <Icon.Times size={26} onClick={() => setIsOpen(prev => !prev)} />
        </Modal.Header>
        <Modal.Body>
          <Form.Item>
            <Field.Input onChange={formik.handleChange} name='name' placeholder='name' />
            {!!formik.errors.name && <Field.Message type='error'>{formik.errors.name}</Field.Message>}
          </Form.Item>
          <Form.Item>
            <Field.Input onChange={formik.handleChange} name='type' placeholder='type' />
            {!!formik.errors.type && <Field.Message type='error'>{formik.errors.type}</Field.Message>}
          </Form.Item>
        </Modal.Body>
        <Modal.Footer>
          <Button.Primary>
            Submit
          </Button.Primary>
        </Modal.Footer>
      </Modal.Card>
    </Modal>
  )
}

export default memo(CategoryForm);