import * as yup from 'yup';

const LoginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(8),
})

export default LoginSchema