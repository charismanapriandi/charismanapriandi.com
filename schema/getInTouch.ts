import { string, object, InferType, TypeOf } from 'yup';

const getInTouch = object({
  name: string().required(),
  email: string().email().required(),
  message: string().required()
})

interface GetInTouchValues extends InferType<typeof getInTouch> {}

export default getInTouch;
export type {
  GetInTouchValues
}