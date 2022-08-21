import {object, string, InferType} from 'yup';

const LoginSchema = object({
  username: string().required(),
  password: string().required().min(8),
})

interface LoginValues extends InferType<typeof LoginSchema> {}

export default LoginSchema
export type {
  LoginValues
}