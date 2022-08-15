import { memo } from "react"
import { ProjectCard, Grid, Loading, Button } from "@/components";
import { useState } from "react";
import Link from "next/link";

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
      <Grid 
        isAutoFit={false} 
        css={{marginBottom: '20px'}} 
        column={{
          default: 1,
          sm: 2,
          md: 3
        }}
        gap={20}>
        <Link href={'/work/soaaaasas'} passHref>
          <a>
            <ProjectCard name='Intresno' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut tempora incidunt consectetur.' />
          </a>
        </Link>
        <Link href={'/work/soaaaasas'} passHref>
          <a>
            <ProjectCard name='Intresno' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut tempora incidunt consectetur.' />
          </a>
        </Link>
        <Link href={'/work/soaaaasas'} passHref>
          <a>
            <ProjectCard name='Intresno' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut tempora incidunt consectetur.' />
          </a>
        </Link>
        <Link href={'/work/soaaaasas'} passHref>
          <a>
            <ProjectCard name='Intresno' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut tempora incidunt consectetur.' />
          </a>
        </Link>
        <Link href={'/work/soaaaasas'} passHref>
          <a>
            <ProjectCard name='Intresno' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut tempora incidunt consectetur.' />
          </a>
        </Link>
      </Grid>
      {isFetching
        ? (
          <Loading />
        )
        : (
          <Button.Primary onClick={fetchProject} variant="text">
            Load More
          </Button.Primary>
        )}
    </>
  )
}

export default memo(ProjectList);