import { API_URL } from "config/api"
import { useFormik } from "formik"
import useFileUpload from "hook/useFileUpload"
import useService from "hook/useService"
import { FC, memo, useCallback, useEffect, useState } from "react"
import { toast } from "react-toastify"
import ProjectSchema, { ProjectValues } from "schema/project"
import { Button, Icon, Modal, Field, Form } from ".."

const initialValues: ProjectValues = {
  uuid: undefined,
  logo: '',
  name: '',
  tag: '',
  url: '',
  description: '',
  technologies: []
}

const initialErrors = {
  uuid: undefined,
  logo: undefined,
  name: undefined,
  tag: undefined,
  url: undefined,
  description: undefined,
  technologies: undefined,
}

const CreateUpdateProject: FC<Components.ModalForm> = ({isOpen, close, callback, payload}) => {
  const [tagOptions, setTagOptions] = useState<Array<Common.OptionValues>>([])
  const [technologyOptions, setTechnologyOptions] = useState<Array<Common.OptionValues>>([])

  const {instance: getTags, data: tags} = useService<Array<Response.Tag.GetAll>>()
  const {instance: getTechnologies, data: technologies} = useService<Array<Response.Technology.GetAll>>()
  const {instance, data, isRequesting} = useService<Response.Project.Create>()
  
  const submitForm = async (value: ProjectValues) => {
    const data = new FormData();
    
    await Promise.all(
      Object.keys(values).map(item => {
        if (item === 'technologies') {
          values[item].map(val => {
            console.log(val)
            val !== undefined && data.append('technologies[]', val)
          })
        } else {
          if (!!(values as any)[item]) {
            data.append(item, (values as any)[item])
          }
        }
      })
    )

    await instance({
      method: payload ? 'PUT' : 'POST',
      url: API_URL.PROJECT.CRUD,
      data: data
    })
  }

  const {
    handleSubmit, 
    handleChange, 
    errors, 
    setValues, 
    setFieldValue, 
    values,
    resetForm: formikResetForm,
  } = useFormik<ProjectValues>({
    initialValues: initialValues,
    onSubmit: submitForm,
    validationSchema: ProjectSchema,
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
  }, [close, resetForm])

  useEffect(() => {
    (async () => await getTags({
      method: 'GET',
      url: API_URL.TAG.GET_BY_TYPE('project')
    }))()
  }, [getTags])

  useEffect(() => {
    (async () => getTechnologies({
      method: 'GET',
      url: API_URL.TECHNOLOGY.CRUD,
    }))()
  }, [getTechnologies])

  useEffect(() => {
    if (tags) {
      tags.map(item => {
        setTagOptions(prev => [...prev, {label: item.name, value: item.name}])
      })
    }
    return () => setTagOptions([])
  }, [tags])

  useEffect(() => {
    if (technologies) {
      technologies.map(item => {
        setTechnologyOptions(prev => [...prev, {label: item.name, value: item.uuid}])
      })
    }
    return () => setTechnologyOptions([])
  }, [technologies])

  useEffect(() => {
    if (data) {
      toast.success(data.message)
      closeForm()
      !!callback && callback()
    }
  }, [data, closeForm, callback])

  useEffect(() => {
    if (payload) {
      setValues({
        ...payload,
      })
    }
  }, [payload, setValues])

  return (
    <Modal isOpen={isOpen}>
      <Modal.Card as='form' onSubmit={handleSubmit as any}>
        <Modal.Header>
          {payload ? 'Update' : 'Create'} Project
          <Icon.Times size={34} onClick={closeForm} />
        </Modal.Header>
        <Modal.Body>
          <Form.Item>
            <Field.Input 
              label="Name" 
              error={errors.name} 
              name='name' 
              value={values.name}
              onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Field.Input 
              label="url" 
              error={errors.url} 
              name='url' 
              value={values.url}
              type='url'
              onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Field.SelectC
              options={tagOptions}
              setValue={setFieldValue}
              label="Tag" 
              value={values.tag}
              error={errors.tag} 
              name='tag' 
              onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Field.Input 
              label="description" 
              value={values.description}
              error={errors.description} 
              name='description' 
              onChange={handleChange} />
          </Form.Item>
          <Form.Item>
            <Field.Label>Technologies</Field.Label>
            <select name="technologies" multiple onChange={handleChange}>
              {technologyOptions.map((item, index) => (
                <option key={index} value={item.value}>{item.label}</option>
              ))}
            </select>
            {!!errors.technologies && <Field.Message type='error'>{!!errors.technologies ? String(errors.technologies) : 'Something went wrong!'}</Field.Message>}
          </Form.Item>
          <Form.Item>
            <Field.UploadFile 
              label='logo'
              preview={preview}
              accept='image/png'
              value={values.logo}
              onChange={handleFile}
              error={errors.logo ? String(errors.logo) : undefined}
              name='logo'/>
          </Form.Item>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>
            Submit
          </Button>
        </Modal.Footer>
      </Modal.Card>
    </Modal>
  )
}

export default memo(CreateUpdateProject)