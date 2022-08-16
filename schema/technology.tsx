import * as yup from 'yup';

const TechnologySchema = yup.object().shape({
  name: yup.string().required(),
  url: yup.string().url().required(),
  type: yup.string().required(),
  logo: yup.string().required(),
})

export default TechnologySchema;