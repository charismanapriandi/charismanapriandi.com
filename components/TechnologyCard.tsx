import styled from '@emotion/styled';
import { memo } from 'react';
import { FC } from 'react';
import { Paper as BasePaper, Text } from '@/components';
import Image from 'next/image';

const TechnologyCard: FC<Components.Card.Technology> = ({image, name, url, color}) => (
  <a href={url} rel='noreferrer' target='_blank'>
    <Paper color={color}>
      <Image src={image} alt={name} width={40} height={40}/>
      <Text color='primary'>{name}</Text>
    </Paper>
  </a>
)

const Paper = styled((props: any) => <BasePaper {...props} />)(({color}) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  transition: 'all .3s ease-in-out',
  ':hover': {
    backgroundColor: color
  }
}))

export default memo(TechnologyCard);
