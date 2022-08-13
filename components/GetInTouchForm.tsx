import { useFormik } from "formik";
import { memo } from "react";
import getInTouch from "schema/getInTouch";
import { Field, Button } from '@/components'
import Form from "components/Form";

const initialValues: FormSchema.GetInTouch = {
  name: '',
  email: '',
  message: '',
}

const GetInTouch = () => {
  const formik = useFormik<FormSchema.GetInTouch>({
    initialValues: initialValues,
    onSubmit: () => {},
    validationSchema: getInTouch, 
    validateOnChange: false,
    validateOnBlur: true, 
  })
  
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Item isSideBySide>
        <div>
          <Field.Input name="name" onChange={formik.handleChange} placeholder="Name" />
          {!!formik.errors.name && <Field.Message type='error'>{formik.errors.name}</Field.Message>}
        </div>
        <div>
          <Field.Input name="email" onChange={formik.handleChange} placeholder="Email" />
          {!!formik.errors.email && <Field.Message type='error'>{formik.errors.email}</Field.Message>}
        </div>
      </Form.Item>
      <Form.Item>
        <Field.Textarea name="message" onChange={formik.handleChange} placeholder="Message" />
        {!!formik.errors.message && <Field.Message type='error'>{formik.errors.message}</Field.Message>}
      </Form.Item>
      <Button.Primary type='submit'>Send</Button.Primary>
    </Form>
  )
}

export default memo(GetInTouch);