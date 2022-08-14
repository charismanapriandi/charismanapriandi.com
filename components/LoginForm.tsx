import { useFormik } from "formik"
import { memo, useState } from "react"
import LoginSchema from "schema/login"
import { Loading, Button, Field, Form } from "@/components"

const initialValues: FormSchema.Login = {
  username: '',
  password: '',
}

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const submitForm = () => {
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }
  
  const formik = useFormik<FormSchema.Login>({
    initialValues: initialValues,
    validateOnChange: false,
    onSubmit: submitForm,
    validationSchema: LoginSchema
  })
  
  return (
    <Form onSubmit={formik.handleSubmit} css={{maxWidth: '400px', width: '100%'}}>
      <Form.Item>
        <Field.Input onChange={formik.handleChange} placeholder='Username' name='username' />
        {!!formik.errors.username && <Field.Message type='error'>{formik.errors.username}</Field.Message>}
      </Form.Item>
      <Form.Item>
        <Field.Input onChange={formik.handleChange} placeholder='Password' name='password' />
        {!!formik.errors.password && <Field.Message type='error'>{formik.errors.password}</Field.Message>}
      </Form.Item>
      <Button.Primary 
        disabled={isSubmitted} 
        type='submit'>
        {isSubmitted ? <Loading /> : 'Submit'}
      </Button.Primary>
    </Form>
  )
}

export default memo(LoginForm)