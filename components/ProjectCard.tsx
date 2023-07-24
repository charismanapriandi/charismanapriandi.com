import { FC, memo, useMemo } from "react";
import { Text, Paper } from '@/components';
import styled from "@emotion/styled";
import breakpoint from "styles/breakpoint";
import Image from 'next/image';
import { useTheme } from "@emotion/react";

const LONG_DESCRIPTION_LIMIT = 70

const ProjectCard: FC<Components.Card.Project> = ({ name, description, logo, href, isExpanded, onExpand, onCollapse }) => {
  const isLongDescription = useMemo(() => {
    return description.length > LONG_DESCRIPTION_LIMIT
  }, [description])
  
  return (
    <ProjectPaper>
      {logo
        ? <Image style={{ borderRadius: '10px' }} src={logo} alt={`${name} logo`} width={50} height={50} />
        : <LogoUnknown />
      }
      <Text as='h3' size={20}>{name}</Text>
      <Text size='small'>
        {isLongDescription ? description.slice(0, LONG_DESCRIPTION_LIMIT) + '...' : description}
      </Text>
    </ProjectPaper>
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

export const ProjectPaper = styled(Paper)(({theme}) => ({
  height: '100%',
  // boxShadow: `0 0 0 1px ${theme.palette.color.border}`,
  'h3': {
    marginTop: '20px',
    transition: 'all .3s ease-in-out'
  },
  // ':hover': {
  //   'h3': {
  //     color: theme.palette.text.highlight
  //   }
  // },
  'p': {
    marginTop: '15px',
    lineHeight: '29px'
  },
  [`${breakpoint('sm')}`]: {
    padding: '20px',
  }
}))

export default memo(ProjectCard);