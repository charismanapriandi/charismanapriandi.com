import styled from "@emotion/styled";
import { memo } from "react";

const Divider = styled.div<Components.Divider>(({theme, variant, spacing}) => ({
  width: variant === 'vertical' ? '1px' : '100%',
  height: variant === 'vertical' ? '100%' : '1px',
  backgroundColor: theme.palette.color.border,
  margin: variant === 'vertical' ? `0 ${spacing}px` : `${spacing}px 0`,
  flexShrink: 0,
}))

export default memo(Divider)