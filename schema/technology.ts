import { string, object, InferType, mixed } from 'yup';

const TechnologySchema = object({
  uuid: string().notRequired(),
  name: string().required(),
  url: string().url().required(),
  tag: string().required(),
  logo: mixed()
        .test('logo', 'file is too large', (file: File) => {
          if (file?.size > 1000000) return false;
          return true
        })
        .when('uuid', {
          is: (val: string | undefined) => typeof val === 'string',
          then: mixed().notRequired(),
          otherwise: mixed()
                    .test("logo", "logo is required field", (file: File) => {
                      if (file === undefined) return false
                      return true
                    }),
        })
})

interface TechnologyValues extends InferType<typeof TechnologySchema> {}

export default TechnologySchema;
export type {
  TechnologyValues
}