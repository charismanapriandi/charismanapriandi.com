import { FC, memo, useCallback, useEffect, useState } from "react"
import { Icon, Modal, Text, Button, Field, Form } from "@/components"
import { useFormik } from "formik"
import TechnologySchema, { TechnologyValues } from "schema/technology"
import useService from "hook/useService"
import { API_URL } from "config/api"
import { toast } from "react-toastify"
import useFileUpload from "hook/useFileUpload"

const initialValues: TechnologyValues = {
  uuid: undefined,
  logo: '',
  name: '',
  tag: '',
  url: '',
}

const initialErrors = {
  logo: undefined,
  name: undefined,
  tag: undefined,
  url: undefined,
  uuid: undefined,
}

const CreateUpdateTechnology: FC<Components.ModalForm<Data.Technology>> = ({isOpen, close, payload, callback}) => {
  const {instance, data, error} = useService<Response.Technology.Create>()
  const {instance: getTags, data: tags} = useService<Response.Tag.GetAll[]>()
  const [options, setOptions] = useState<Common.OptionValues[]>([])
  const [logo, setLogo] = useState<File | FileList>()
  
  const submitForm = async (values: TechnologyValues) => {
    const data = new FormData()

    Object.keys(values).map((item) => {
      if (!!(values as any)[item])
      data.append(item, (values as any)[item])
    })

    await instance({
      method: payload ? 'PUT' : 'POST',
      url: API_URL.TECHNOLOGY.CRUD,
      data: data
    })
  }
  
  const {
    handleChange,
    errors,
    handleSubmit, 
    resetForm: formikResetForm, 
    setFieldValue,
    setValues,
    values,
  } = useFormik<TechnologyValues>({
    initialValues: initialValues,
    onSubmit: submitForm,
    validationSchema: TechnologySchema,
    validateOnChange: false,
  })

  const {preview, resetPreview, handleFile} = useFileUpload({
    value: values.logo,
    name: 'logo',
    setValue: setFieldValue,
    shouldValidate: true,
  })

  const resetForm = useCallback(() => {
    formikResetForm({
      errors: initialErrors,
      values: initialValues,
    })
  }, [formikResetForm])

  const closeForm = useCallback(() => {
    close()
    resetForm()
    resetPreview()
  }, [resetForm, close, resetPreview])

  useEffect(() => {
    if (data) {
      toast.success(data.message)
      !!callback && callback()
      closeForm()
    }
  }, [data, callback, resetForm, closeForm])

  useEffect(() => {
    if (payload) {
      setValues({
        uuid: payload.uuid,
        logo: payload.logo,
        name: payload.name,
        tag: payload.tag,
        url: payload.url,
      })
    }
  }, [payload, setValues])

  useEffect(() => {
    (async () => {
      await getTags({
        method: 'GET',
        url: API_URL.TAG.GET_BY_TYPE('technology')
      })
    })()
  }, [getTags])

  useEffect(() => {
    if (tags) {
      tags.map(item => {
        setOptions(prev => [...prev, {label: item.name, value: item.name}])
      })
    }
    return () => setOptions([])
  }, [tags])
  
  return (
    <Modal isOpen={isOpen}>
      <Modal.Card as={Form} onSubmit={handleSubmit as any}>
        <Modal.Header>
          <Text>{payload ? 'Update' : 'Create'} Technology</Text>
          <Icon.Times onClick={closeForm} size={24} />
        </Modal.Header>
        <Modal.Body>
          <Form.Item>
            <Field.Input 
              label='Name'
              value={values.name} 
              name='name' 
              onChange={handleChange} 
              error={errors.name} />
          </Form.Item>
          <Form.Item>
            <Field.Input
              label='Url' 
              value={values.url} 
              type='url' 
              name='url' 
              error={errors.url}
              onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Field.SelectC
              name='tag'
              value={values.tag}
              options={options}
              setValue={setFieldValue}
              label="Tag"
              error={errors.tag} />
          </Form.Item>
          <Form.Item>
            <Field.UploadFile
              label='logo'
              name='logo'
              preview={preview}
              value={values.logo}
              error={errors.logo ? String(errors.logo) : undefined}
              onChange={handleFile}
              accept='image/png'/>
          </Form.Item>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Submit</Button>
        </Modal.Footer>
      </Modal.Card>
    </Modal>
  )
}

export default memo(CreateUpdateTechnology);