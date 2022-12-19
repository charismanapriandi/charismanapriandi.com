import { FC, memo } from "react";
import { Text, Paper, Row } from '@/components';
import styled from "@emotion/styled";
import breakpoint from "styles/breakpoint";
import Image from 'next/image';

const ProjectCard: FC<Components.Card.Project> = ({name, description, logo }) => {
  return (
    <ProjectPaper>
      <Image style={{ borderRadius: '10px' }} src={logo} alt={`${name} logo`} width={50} height={50} />
      <Text as='h3' size={20}>{name}</Text>
      <Text>{description}</Text>
    </ProjectPaper>
  )
}

const ProjectPaper = styled(Paper)(({theme}) => ({
  cursor: 'pointer',
  height: '100%',
  boxShadow: `0 0 0 1px ${theme.palette.color.border}`,
  'h3': {
    marginTop: '20px',
    transition: 'all .3s ease-in-out'
  },
  ':hover': {
    'h3': {
      color: theme.palette.text.highlight
    }
  },
  'p': {
    marginTop: '15px',
    lineHeight: '29px'
  },
  [`${breakpoint('sm')}`]: {
    padding: '20px',
  }
}))

export default memo(ProjectCard);