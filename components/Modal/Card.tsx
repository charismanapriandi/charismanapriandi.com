import styled from "@emotion/styled";
import { memo } from "react";

interface EmotionAsProps {
  as?: React.ElementType | keyof JSX.IntrinsicElements
}

const Card = styled.div<EmotionAsProps>(({theme}) => ({
  backgroundColor: theme.palette.background.primary,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.borderRadius,
  maxWidth: '600px',
  margin: '10px',
  width: '100%',
  maxHeight: '90%',
}))

export default memo(Card)