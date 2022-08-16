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
            <Field.Label>Name</Field.Label>
            <Field.Input onChange={formik.handleChange} name='name' />
            {!!formik.errors.name && <Field.Message type='error'>{formik.errors.name}</Field.Message>}
          </Form.Item>
          <Form.Item>
            <Field.Label>Type</Field.Label>
            <Field.Input onChange={formik.handleChange} name='type' />
            {!!formik.errors.type && <Field.Message type='error'>{formik.errors.type}</Field.Message>}
          </Form.Item>
        </Modal.Body>
        <Modal.Footer>
          <Button.Primary type='submit'>
            Submit
          </Button.Primary>
        </Modal.Footer>
      </Modal.Card>
    </Modal>
  )
}

export default memo(CategoryForm);