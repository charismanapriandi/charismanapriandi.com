import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from '@/hook';
import styled from "@emotion/styled";
import { Global } from "@emotion/react";

const Pointer = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <>
      <Circle
        ref={ref}
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 8,
          stiffness: 50,
          restDelta: 0.001
        }}
      />
      <Global
        styles={{
          'html': {
            cursor: 'none'
          }
        }}
      />
    </>
  );
}

const Circle = styled(motion.div)(({theme}) => ({
  position: 'fixed',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: theme.palette.color.primary,
  mixBlendMode: 'difference',
}))

export default Pointer;
