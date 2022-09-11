import { memo } from "react"
import { ProjectCard, Grid, Loading, Button } from "@/components";
import { useState } from "react";
import Link from "next/link";
import projects from 'public/json/projects.json'

const ProjectList = () => (
  <Grid 
    isAutoFit={false} 
    css={{marginBottom: '20px'}} 
    column={{
      default: 1,
      sm: 2,
      md: 3
    }}
    gap={20}>
    {projects.map((item: any, index: any) => (
      <Grid.Item key={index}>
        <Link href={item.href} passHref>
            <a target='_blank'>
              <ProjectCard 
                logo={item.logo}
                name={item.name} 
                description={item.desc}/>
            </a>
          </Link>
      </Grid.Item>
    ))}
  </Grid>
)


export default memo(ProjectList);