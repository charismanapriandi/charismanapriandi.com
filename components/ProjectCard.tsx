import { FC, memo } from "react";
import { Text, Paper, Row, Image } from '@/components';
import styled from "@emotion/styled";
import breakpoint from "styles/breakpoint";

const ProjectCard: FC<Components.Card.Project> = ({name, description, technologies }) => {
  return (
    <ProjectPaper>
      <Text as='h3'>{name}</Text>
      <Text>{description}</Text>
      <Row css={{marginTop: '20px'}} alignItems="center" gap={10} flexWrap='wrap'>
        {
          technologies
          && technologies.length > 0 
          && technologies.map((item, index) => (
            <Image 
              src={item.logo} 
              isExternalResource
              key={index} 
              width={25} 
              height={25} 
              alt={item.name} />
          ))
        }
      </Row>
    </ProjectPaper>
  )
}

const ProjectPaper = styled(Paper)(({theme}) => ({
  cursor: 'pointer',
  height: '100%',
  'h3': {
    transition: 'all .3s ease-in-out'
  },
  ':hover': {
    'h3': {
      color: theme.palette.text.highlight
    }
  },
  [`${breakpoint('sm')}`]: {
    padding: '20px',
  }
}))

export default memo(ProjectCard);