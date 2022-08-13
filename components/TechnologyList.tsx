import { useFormik } from "formik"
import { memo, useEffect, useState } from "react"
import { Row, Field, TechnologyCardMotion, Grid } from "."
import { AnimatePresence } from 'framer-motion';
import useUniqueValue from "hook/useUniqueValue";
import Form from "./Form";

const data = [
  {
    name: 'Javascript',
    color: '#F7DF21',
    image: '/javascript.png',
    type: 'Programming Language',
    url: '#'
  },
  {
    name: 'React Js',
    color: '#020B1C',
    image: '/react.png',
    type: 'Library',
    url: '#'
  },
  {
    name: 'Node Js',
    color: '#F0F0F0',
    image: '/nodejs.png',
    type: 'Javascript Runtime',
    url: '#'
  },
  {
    name: 'Python',
    color: '#020B1C',
    image: '/python.png',
    type: 'Programming Language',
    url: '#'
  }
]

const TechnologyList = () => {
  const [listOfType, setListOfType] = useState<string[]>([])

  const filter = useUniqueValue(listOfType)

  const formik = useFormik({
    initialValues: {
      type: 'All'
    },
    onSubmit: () => {}
  })

  useEffect(() => {
    setListOfType(data.map(item => item.type))
  }, [])
  
  return (
    <>
      <Form>
        <Row flexWrap="wrap" alignItems="center" gap={20}>
          <Field.Radio
            onChange={formik.handleChange}
            isSelected={formik.values.type === 'All'}
            name="type" 
            value='All'
            label='All' />
          {filter.map((item, index) => (
            <Field.Radio
              key={index}
              onChange={formik.handleChange}
              isSelected={formik.values.type === item}
              name="type" 
              value={item} 
              label={item} />
          ))}
        </Row>
      </Form>
      <Grid 
        isAutoFit={false} 
        column={{
          default: 1,
          sm: 2,
          md: 3,
          lg: 4
        }} 
        css={{marginTop: '20px'}} 
        gap={10}>
        <AnimatePresence>
          {data
            .filter(
              i => formik.values.type === 'All' 
                ? i 
                : i.type === formik.values.type)
            .map((item, index) =>
              <TechnologyCardMotion 
                key={index} 
                color={item.color} 
                type={item.type} 
                image={item.image} 
                name={item.name} 
                url={item.url} />
            )
          }
        </AnimatePresence>
      </Grid>
    </>
  )
}

export default memo(TechnologyList)