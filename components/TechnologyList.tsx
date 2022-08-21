import { useFormik } from "formik"
import { memo, useEffect, useState } from "react"
import { Row, Field, TechnologyCardMotion, Grid } from "."
import { AnimatePresence } from 'framer-motion';
import Form from "./Form";
import { useTechnologyService } from "service/TechnologyService";
import uniqueString from "utils/uniqueString";

const TechnologyList = () => {
  const [ filter, setFilter ] = useState<string[]>([])
  const { technologies } = useTechnologyService({shouldGetData: true})

  const formik = useFormik({
    initialValues: {
      type: 'All'
    },
    onSubmit: () => {}
  })

  useEffect(() => {
    const tags = technologies.map(technology => technology.tag)
    const unique = uniqueString(tags)
    setFilter(unique)

    return () => setFilter([])
  }, [technologies])
  
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
          {technologies
            .filter(
              i => formik.values.type === 'All' 
                ? i 
                : i.tag === formik.values.type)
            .map((item, index) =>
              <TechnologyCardMotion 
                key={index} 
                color='transparent' 
                type={item.tag} 
                image={item.logo} 
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