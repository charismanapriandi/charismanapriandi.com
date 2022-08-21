import { useFormik } from "formik"
import { memo, useState } from "react"
import LoginSchema, { LoginValues } from "schema/login"
import { Loading, Button, Field, Form } from "@/components"
import useAuthService from "service/AuthService"

const initialValues: LoginValues = {
  username: '',
  password: '',
}

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const {login} = useAuthService()
  
  const submitForm = async (values: LoginValues) => {
    setIsSubmitting(true)
    login(values)
    setIsSubmitting(false)
  }

  
  const formik = useFormik<LoginValues>({
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
        <Field.Input onChange={formik.handleChange} placeholder='Password' name='password' type='password' />
        {!!formik.errors.password && <Field.Message type='error'>{formik.errors.password}</Field.Message>}
      </Form.Item>
      {/* {!!error && (
        <Form.Item>
          <Alert type='error'>{error.message}</Alert>
        </Form.Item>
      )} */}
      <Button 
        disabled={isSubmitting} 
        type='submit'>
        {isSubmitting ? <Loading /> : 'Submit'}
      </Button>
    </Form>
  )
}

export default memo(Login)