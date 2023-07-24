import { memo } from "react"
import { ProjectCard, Grid, Text } from "@/components";
import { useState } from "react";
import projects from 'public/json/projects.json'
import { AnimatePresence, motion } from "framer-motion";
import { ProjectPaper } from "components/ProjectCard";
import { useTheme } from "@emotion/react";
import { Close } from "@emotion-icons/ionicons-outline";
import Image from "next/image";

const ProjectList = () => {
  const [expanded, setExpanded] = useState<typeof projects[0] | null>(null)
  const theme = useTheme()
  
  return (
    <Grid 
      isAutoFit={false} 
      css={{marginBottom: '20px'}} 
      column={{
        default: 1,
        sm: 2,
        md: 3
      }}
      gap={20}
    >
      {projects.map((item: any, index: any) => (
        <Grid.Item key={index}>
          <ProjectCard 
            logo={item.logo}
            name={item.name} 
            description={item.desc}
            href={item.href}
            onCollapse={() => setExpanded(null)}
            onExpand={() => setExpanded(item)}
            isExpanded={false}
          />
        </Grid.Item>
      ))}
    </Grid>
  )
}

const LogoUnknown = () => {
  const theme = useTheme()
  
  return (
    <div 
      css={{ 
        background: `linear-gradient(45deg, ${theme.palette.color.primary} 0%, #174188 100%)`, 
        borderRadius: 10,
        width: 50,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }} 
    >
      <div
        css={{
          background: `linear-gradient(225deg, ${theme.palette.color.primary} 0%, #174188 100%)`, 
          width: 35,
          height: 35,
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: `#DDDDDE`,
          fontWeight: 'bold'
        }}
      />
    </div>
  )
}

export default memo(ProjectList);