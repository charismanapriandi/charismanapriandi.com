import * as yup from 'yup';

const CategorySchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
})

export default CategorySchema