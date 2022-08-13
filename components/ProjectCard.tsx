import { FC, memo } from "react";
import { Text, Paper } from '@/components';
import styled from "@emotion/styled";
import breakpoint from "styles/breakpoint";

const ProjectCard: FC<Components.Card.Project> = ({name, description}) => {
  return (
    <ProjectPaper>
      <Text as='h3'>{name}</Text>
      <Text>{description}</Text>
    </ProjectPaper>
  )
}

const ProjectPaper = styled(Paper)(({theme}) => ({
  cursor: 'pointer',
  'h3': {
    transition: 'all .3s ease-in-out'
  },
  ':hover': {
    'h3': {
      color: theme.palette.text.highlight
    }
  },
  [`${breakpoint('md')}`]: {
    padding: '20px',
  }
}))

export default memo(ProjectCard);