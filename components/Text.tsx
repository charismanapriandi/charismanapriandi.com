import styled from "@emotion/styled";
import { memo } from "react";

const Text = styled.p<Components.Text>(({theme, as, size, textAlign, color, weight}) => ({
  fontSize: 
    !!size 
      ? typeof size === 'number' 
        ? `${size}px`
        : size === 'large' && `clamp(18px, 8vw, ${theme.font.size.large})`
          || size === 'small' && `clamp(14px, 8vw, ${theme.font.size.small})`
          || `clamp(16px, 8vw, ${theme.font.size.medium})`
      : as === 'h1' && 'clamp(30px, 8vw, 60px)'
        || as === 'h2' && 'clamp(28px, 8vw, 46px)'
        || as === 'h3' && 'clamp(24px, 8vw, 34px)'
        || as === 'h3' && '29px'
        || theme.font.size.medium,
  fontFamily: theme.font.family.poppins,
  color: !!color 
    ?  color === 'primary' && theme.palette.text.primary
      || color === 'secondary' && theme.palette.text.secondary
      || color === 'highlight' && theme.palette.text.highlight
      || theme.palette.text.primary
    : as === 'h1' 
      || as === 'h2' 
      || as === 'h3' 
      || as === 'h4'
        ? theme.palette.text.primary 
        : theme.palette.text.secondary,
  fontWeight: 
    !!weight 
      ? weight 
      : as === 'h1' 
        || as === 'h2' 
        || as === 'h3'
        || as === 'h4'
          ? 500 
          : 300,
  textAlign: textAlign,
}))

export default memo(Text);