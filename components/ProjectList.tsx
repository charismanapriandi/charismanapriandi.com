import { memo } from "react"
import { ProjectCard, Motion, Loading } from "@/components";
import { useState } from "react";

const ProjectList = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false)
  
  const fetchProject = () => {
    setIsFetching(true)
    setTimeout(() => {
      setIsFetching(false)
    }, 3000)
  }
  
  return (
    <>
      <Motion.Grid isAutoFit={true} layout animate={{width: 'auto'}} transition={{type: 'spring'}} css={{marginBottom: '20px'}} width='300px' gap={20}>
        <ProjectCard name='Intresno' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut tempora incidunt consectetur.' />
        <ProjectCard name='Intresno' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut tempora incidunt consectetur.' />
        <ProjectCard name='Intresno' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut tempora incidunt consectetur.' />
        <ProjectCard name='Intresno' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut tempora incidunt consectetur.' />
        <ProjectCard name='Intresno' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut tempora incidunt consectetur.' />
      </Motion.Grid>
      {isFetching
        ? (
          <Loading />
        )
        : (
          // <Button.Primary onClick={fetchProject} variant="text">
          //   Load More
          // </Button.Primary>
          null
        )}
    </>
  )
}

export default memo(ProjectList);