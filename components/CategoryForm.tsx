import { memo } from "react"
import { Button } from "."
import Field from "./Field"
import Form from "./Form"

const CategoryForm = () => {
  return (
    <Form>
      <Form.Item>
        <Field.Input name='type' placeholder='name' />
      </Form.Item>
      <Form.Item>
        <Field.Input name='type' placeholder='name' />
      </Form.Item>
      <Button.Primary>
        Submit
      </Button.Primary>
    </Form>
  )
}

export default memo(CategoryForm);