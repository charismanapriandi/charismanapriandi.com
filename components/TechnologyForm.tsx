import { useFormik } from "formik"
import { FC, memo } from "react"
import TechnologySchema from "schema/technology"
import { Button, Icon, Modal, Field, Form } from "."

const initialValues: FormSchema.Technology.Create = {
  logo: '',
  name: '',
  type: '',
  url: ''
}

const TechnologyForm: FC<Components.ModalForm> = ({isOpen, setIsOpen}) => {
  const submitForm = (data: FormSchema.Technology.Create) => {console.log(data)}
  
  const formik = useFormik<FormSchema.Technology.Create>({
    initialValues: initialValues,
    onSubmit: submitForm,
    validationSchema: TechnologySchema
  })

  return (
    <Modal isOpen={isOpen}>
      <Modal.Card as='form' onSubmit={formik.handleSubmit as any}>
        <Modal.Header>
          Create Technology
          <Icon.Times size={34} onClick={() => setIsOpen(false)} />
        </Modal.Header>
        <Modal.Body>
          <Form.Item>
            <Field.Label>Name</Field.Label>
            <Field.Input name='name' onChange={formik.handleChange} />
            {!!formik.errors.name && <Field.Message type='error'>{formik.errors.name}</Field.Message>}
          </Form.Item>
          <Form.Item>
            <Field.Label>Url</Field.Label>
            <Field.Input type='url' name='url' onChange={formik.handleChange} />
            {!!formik.errors.url && <Field.Message type='error'>{formik.errors.url}</Field.Message>}
          </Form.Item>
          <Form.Item>
            <Field.Label>Type</Field.Label>
            <select name="type" onChange={formik.handleChange}>
              <option>satu</option>
              <option>satu</option>
              <option>satu</option>
            </select>
            {!!formik.errors.type && <Field.Message type='error'>{formik.errors.type}</Field.Message>}
          </Form.Item>
          <Form.Item>
            <Field.Label>logo</Field.Label>
            <Field.Input name='logo' onChange={formik.handleChange} type='file' accept='image/png' />
            {!!formik.errors.logo && <Field.Message type='error'>{formik.errors.logo}</Field.Message>}
          </Form.Item>
        </Modal.Body>
        <Modal.Footer>
          <Button.Primary type="submit">
            Submit
          </Button.Primary>
        </Modal.Footer>
      </Modal.Card>
    </Modal>
  )
}

export default memo(TechnologyForm)