import { API_URL } from "config/api"
import { FormikProvider, useFormik } from "formik"
import useService from "hook/useService"
import { FC, memo, useCallback, useEffect } from "react"
import TagSchema, { TagValues } from "schema/tag"
import { Button, Modal, Form, Field, Icon, Loading } from ".."
import { toast } from 'react-toastify'

const initialValues: TagValues = {
  uuid: undefined,
  name: '',
  type: '',
}

const CreateUpdateTag: FC<Components.ModalForm<TagValues>> = ({isOpen, close, payload, callback}) => {
  const {instance, data, error, isRequesting} = useService()
  
  const submitForm = async (values: TagValues) => {
    await instance({
      method: payload ? "PUT" : 'POST',
      url: API_URL.TAG.CRUD,
      data: values
    })
  }

  const formik = useFormik<TagValues>({
    initialValues: initialValues,
    onSubmit: submitForm,
    validationSchema: TagSchema,
    validateOnChange: false,
  })
  const {handleSubmit, handleChange, setValues, resetForm, setFieldValue} = formik

  const resetFormValues = useCallback(() => {
    resetForm({
      errors: {
        name: undefined,
        type: undefined,
        uuid: undefined,
      },
      values: {
        name: '',
        type: '',
        uuid: undefined
      }
    })
  }, [resetForm])
  
  // normalizer
  useEffect(() => {
    if (payload) {
      setValues({
        uuid: payload.uuid,
        name: payload.name,
        type: payload.type,
      })
    }
    return () => resetFormValues()
  }, [payload, resetForm, setValues, resetFormValues])

  useEffect(() => {
    if (data) {
      toast.success(data.message)
      !!callback && callback()
      close()
      resetForm()
    }
  }, [data, close, callback, resetForm])
  
  return (
    <FormikProvider value={formik}>
      <Modal isOpen={isOpen}>
        <Modal.Card as='form' onSubmit={handleSubmit as any}>
          <Modal.Header>
            {payload ? 'Update' : 'Create'} Tag
            <Icon.Times size={26} onClick={close} />
          </Modal.Header>
          <Modal.Body>
            <Form.Item>
              <Field.SelectC 
                value={formik.values.type} 
                onChange={handleChange} 
                name='type' 
                label='Type' 
                setValue={setFieldValue}
                error={formik.errors.type}
                options={[
                  {label: 'Technology', value: 'technology'},
                  {label: 'Project', value: 'project'},
                ]} />
            </Form.Item>
            <Form.Item>
              <Field.Input 
                label='Name' 
                error={formik.errors.name}
                value={formik.values.name} 
                onChange={handleChange} 
                name='name' />
            </Form.Item>
          </Modal.Body>
          <Modal.Footer>
            <Button disabled={isRequesting} type='submit'>
              {isRequesting ? <Loading /> : 'Submit'}
            </Button>
          </Modal.Footer>
        </Modal.Card>
      </Modal>
    </FormikProvider>
  )
}

CreateUpdateTag.displayName = 'FormCollectionTag'

export default memo(CreateUpdateTag);