import * as yup from 'yup';

const ProjectSchema = yup.object().shape({
  name: yup.string().required(),
  url: yup.string().url().required(),
  description: yup.string().required(),
  type: yup.string().required(),
  technologies: yup.array().of(yup.string()).required() ,
  logo: yup.string().required()
})

export default ProjectSchema;