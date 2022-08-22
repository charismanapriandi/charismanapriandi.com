import { memo } from "react"
import { ProjectCard, Grid, Loading, Button } from "@/components";
import { useState } from "react";
import Link from "next/link";

const ProjectList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [projects, setProjects] = useState<any>([])
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isLoadMore, setIsLoadMore] = useState<boolean>(true)
  
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
        {projects.map((item: any, index: string) => (
          <Link key={index} href={item.url} passHref>
            <a>
              <ProjectCard 
                technologies={item.technologies}
                name={item.name} 
                description={item.description}/>
            </a>
          </Link>
        ))}
      </Grid>
      {isLoading
        ? (
          <Loading />
        )
        : isLoadMore 
          &&  <Button disabled={isLoading} variant="text">
                Load More
              </Button>
        }
    </>
  )
}

export default memo(ProjectList);