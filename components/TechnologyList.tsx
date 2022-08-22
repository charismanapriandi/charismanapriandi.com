import { useFormik } from "formik"
import { memo, useEffect, useState } from "react"
import { Row, TechnologyCardMotion, Grid, Radio } from "."
import { AnimatePresence } from 'framer-motion';
import uniqueString from "utils/uniqueString";
import technologies from '../public/json/technologies.json'

const TechnologyList = () => {
  const [ filter, setFilter ] = useState<string[]>([])

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
  }, [])
  
  return (
    <>
      <Row flexWrap="wrap" alignItems="center" gap={20}>
        <Radio
          onChange={formik.handleChange}
          isSelected={formik.values.type === 'All'}
          name="type" 
          value='All'
          label='All' />
        {filter.map((item, index) => (
          <Radio
            key={index}
            onChange={formik.handleChange}
            isSelected={formik.values.type === item}
            name="type" 
            value={item} 
            label={item} />
        ))}
      </Row>
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