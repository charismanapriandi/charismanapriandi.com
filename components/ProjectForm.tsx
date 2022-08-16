import { useFormik } from "formik"
import { FC, memo } from "react"
import ProjectSchema from "schema/project"
import { Button, Icon, Modal, Field, Form } from "."

const initialValues: FormSchema.Project.Create = {
  logo: '',
  name: '',
  type: '',
  url: '',
  description: '',
  technologies: []
}

const ProjectForm: FC<Components.ModalForm> = ({isOpen, setIsOpen}) => {
  const submitForm = (data: FormSchema.Project.Create) => {
    console.log(data)
  }

  const formik = useFormik<FormSchema.Project.Create>({
    initialValues: initialValues,
    onSubmit: submitForm,
    validationSchema: ProjectSchema
  })

  return (
    <Modal isOpen={isOpen}>
      <Modal.Card as='form' onSubmit={formik.handleSubmit as any}>
        <Modal.Header>
          Create Project
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
            <Field.Label>Description</Field.Label>
            <Field.Textarea name='description' onChange={formik.handleChange} />
            {!!formik.errors.description && <Field.Message type='error'>{formik.errors.description}</Field.Message>}
          </Form.Item>
          <Form.Item>
            <Field.Label>Technologies</Field.Label>
            <select name="technologies" multiple onChange={formik.handleChange}>
              <option>satu</option>
              <option>dua</option>
              <option>tiga</option>
            </select>
            {!!formik.errors.technologies && <Field.Message type='error'>{formik.errors.type}</Field.Message>}
          </Form.Item>
          <Form.Item>
            <Field.Label>logo</Field.Label>
            <Field.Input name='logo' onChange={formik.handleChange} type='file' accept='image/png' />
            {!!formik.errors.logo && <Field.Message type='error'>{formik.errors.logo}</Field.Message>}
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

export default memo(ProjectForm)