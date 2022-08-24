import React, { memo } from "react"
import { TechnologyCardMotion, Grid, Text } from "."
import technologies from '../public/json/technologies.json'

const TechnologyList = () => {
  return (
    <>
      {Object.keys(technologies).map((key, idxKey) => (
        <React.Fragment key={idxKey}>
          <Text css={{marginTop: '50px'}} key={idxKey} weight={500}>{key}</Text>
          <Grid 
            isAutoFit={false} 
            column={{
              default: 2,
              sm: 3,
              md: 4,
            }} 
            css={{marginTop: '20px'}} 
            gap={10}>
            {((technologies as any)[key] as Components.Card.Technology[]).map((item, idx) => (
              <TechnologyCardMotion 
                key={idx} 
                color='transparent' 
                logo={item.logo} 
                name={item.name} 
                url={item.url} />
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </>
  )
}

export default memo(TechnologyList)