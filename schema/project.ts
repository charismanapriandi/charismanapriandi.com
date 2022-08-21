import { string, mixed, object, array, InferType } from 'yup';

const ProjectSchema = object({
  uuid: string().notRequired(),
  name: string().required(),
  url: string().url().required(),
  description: string().required(),
  tag: string().required(),
  technologies: array().required(),
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

interface ProjectValues extends InferType<typeof ProjectSchema> {}

export default ProjectSchema;
export type {
  ProjectValues,
}