import * as yup from 'yup';

const getInTouch = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required()
})

export default getInTouch;