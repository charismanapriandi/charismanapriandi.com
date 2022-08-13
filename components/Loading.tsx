import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { memo } from 'react';

const Loading = () => (
  <motion.div 
    initial="start"
    animate="end" 
    variants={containerVariants} 
    css={containerCss}>
    <Circle variants={circleVariants} transition={circleTransition} />
    <Circle variants={circleVariants} transition={circleTransition} />
    <Circle variants={circleVariants} transition={circleTransition} />
  </motion.div>
)

export default memo(Loading)

const containerCss = css({
  display: 'flex', 
  alignItems: 'center', 
  gap: '10px',
  padding: '20px 0',
  justifyContent: 'center'
})

const Circle = styled(motion.span)(({theme}) => ({
  width: '10px',
  height: '10px',
  borderRadius: '10px',
  backgroundColor: theme.palette.text.primary,
}))

const containerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const circleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
}

const circleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
}
