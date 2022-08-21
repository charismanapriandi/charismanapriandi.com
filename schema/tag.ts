import { string, object, InferType} from 'yup';

const TagSchema = object({
  uuid: string().notRequired(),
  name: string().required(),
  type: string().required(),
})

interface TagValues extends InferType<typeof TagSchema> {}

export default TagSchema
export type {
  TagValues
}