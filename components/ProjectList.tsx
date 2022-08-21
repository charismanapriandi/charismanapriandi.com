import { memo, useCallback, useEffect } from "react"
import { ProjectCard, Grid, Loading, Button } from "@/components";
import { useState } from "react";
import Link from "next/link";
import { useProjectService } from "service/ProjectService";
import useService from "hook/useService";
import { API_URL } from "config/api";

const ProjectList = () => {
  const [projects, setProjects] = useState<Response.Project.Get[]>([])
  const {data, instance, isRequesting} = useService<Response.Project.GetWithPaginate>()
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isLoadMore, setIsLoadMore] = useState<boolean>(true)
  
  const fetch = useCallback(async (page: number) => {
    await instance({
      method: 'GET',
      url: API_URL.PROJECT.PAGINATE(page),
    })
  }, [instance])

  useEffect(() => {
    fetch(0)
  }, [fetch])

  useEffect(() => {
    if (data) {
      data.data.map(item => {
        setProjects(prev => [...prev, item])
      })
      setCurrentPage(data.currentPage)
    }
  }, [data])

  useEffect(() => {
    if (data && projects.length >= data.total) {
      setIsLoadMore(false)
    }
  }, [projects, data])
  
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
        {projects.map((item, index) => (
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
      {isRequesting
        ? (
          <Loading />
        )
        : isLoadMore 
          &&  <Button disabled={isRequesting} onClick={() => fetch(currentPage + 1)} variant="text">
                Load More
              </Button>
        }
    </>
  )
}

export default memo(ProjectList);