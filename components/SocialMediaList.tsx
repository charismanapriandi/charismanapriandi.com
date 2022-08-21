import { Icon } from "."
import { motion } from 'framer-motion';
import { Text } from '@/components';
import styled from "@emotion/styled";
import { memo } from "react";

const SocialMediaList = () => {
  return (
    <div css={{
      display: 'flex',
      alignItems: 'flex-end',
      flexDirection: 'column',
      gap: '15px',
    }}>
      <a href='https://web.facebook.com/charisman.afriandi' target='_blank' rel='noreferrer'>
        <IconContainerMotion initial='inactive' animate='inactive' whileHover='active'>
          <Icon.Facebook size={30} />
          <motion.div layout transition={{type: 'tween'}} variants={(iconTextVariant as any)}>
            <Text css={{marginLeft: '10px'}}>Facebook</Text>
          </motion.div>
        </IconContainerMotion>
      </a>
      <a href='https://www.instagram.com/risman.afriand' target='_blank' rel='noreferrer'>
        <IconContainerMotion initial='inactive' animate='inactive' whileHover='active'>
          <Icon.Instagram size={30}/>
          <motion.div layout transition={{type: 'tween'}} variants={(iconTextVariant as any)}>
            <Text css={{marginLeft: '10px'}}>Instagram</Text>
          </motion.div>
        </IconContainerMotion>
      </a>
      <a href='https://www.linkedin.com/in/charisman-afriandi-373960209/' target='_blank' rel='noreferrer'>
        <IconContainerMotion initial='inactive' animate='inactive' whileHover='active'>
          <Icon.Linkedin size={30}/>
          <motion.div layout transition={{type: 'tween'}} variants={(iconTextVariant as any)}>
            <Text css={{marginLeft: '10px'}}>Linkedin</Text>
          </motion.div>
        </IconContainerMotion>
      </a>
    </div>
  )
}

const iconTextVariant = {
  inactive: { 
    maxWidth: 0,
    opacity: 0,
    pointerEvents: 'none'
  },
  active: {
    maxWidth: '200px',
    opacity: 1,
  }
}

const IconContainerMotion = styled(motion.div)(({}) => ({
  display: 'flex', 
  alignItems: 'center', 
  pointerEvents: 'auto', 
  cursor: 'pointer',
  width: 'fit-content',
  backdropFilter: 'blur(5px)',
  borderRadius: '100px',
  padding: '2px',
}))

export default memo(SocialMediaList);