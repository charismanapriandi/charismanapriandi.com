/** @jsxImportSource @emotion/react */
import { motion } from 'framer-motion';
import { memo } from 'react';
import { FC } from 'react';
import { Paper as BasePaper, Text, Image } from '@/components';
import styled from '@emotion/styled';

const TechnologyCardMotion: FC<Components.Card.Technology> = ({image, name, url, color}) => (
  <motion.a 
    layout
    href={url}
    animate={cardMotion.active}
    initial={cardMotion.inactive}
    exit={cardMotion.inactive}
    >
    <Paper color={color}>
      <Image 
        isExternalResource
        css={{flexShrink: 0}} 
        src={image} 
        alt={name} 
        width={40} 
        height={40}/>
      <Text color='primary'>{name}</Text>
    </Paper>
  </motion.a>
)

const Paper = styled((props: any) => <BasePaper {...props}/>)(({theme, color}) => ({
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  transition: 'all .3s ease-in-out',
  ':hover': {
    backgroundColor: color
  }
}))

const cardMotion = {
  active: {
    opacity: 1
  },
  inactive: {
    opacity: 0
  },
}

export default memo(TechnologyCardMotion);
