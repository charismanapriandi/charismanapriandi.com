/** @jsxImportSource @emotion/react */
import { motion } from 'framer-motion';
import { memo } from 'react';
import { FC } from 'react';
import { Text } from '@/components';
import Image from 'next/image';
import styled from '@emotion/styled';

const TechnologyCard: FC<Components.Card.Technology> = ({logo, name, url, color, ...props}) => (
  <Paper 
    color={color}
    layout
    href={url}
    target='_blank'
    rel='noreferrer'
    animate={cardMotion.active}
    initial={cardMotion.inactive}
    exit={cardMotion.inactive}
    {...props}>
    <div css={{
      width: 40, 
      height: 40, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center'}}>
      <div css={{
        position: 'relative', 
        width: '30px', 
        height: '30px'}}>
        <Image 
          css={{flexShrink: 0}} 
          src={logo} 
          alt={name} 
          objectFit='contain'
          layout='fill'/>
      </div>
    </div>
    <Text 
      color='primary' 
      weight={500}
      css={{
        overflow: 'hidden', 
        whiteSpace: 'nowrap', 
        textOverflow: 'ellipsis'}}>
      {name}
    </Text>
  </Paper>
)

const Paper = styled(motion.a)(({theme, color}) => ({
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  padding: '.5rem',
  gap: '20px',
  width: 'auto',
  transition: 'all .3s ease-in-out',
  backgroundColor: theme.palette.background.secondary,
  borderRadius: theme.borderRadius,
  ':focus': {
    outline: 'none'
  },
  ':hover, :focus': {
    backgroundColor: color,
    boxShadow: `0 0 0 3px ${theme.palette.color.primary}7F`
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

export default memo(TechnologyCard);
