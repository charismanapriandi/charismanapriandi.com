import styled from "@emotion/styled";
import { memo } from "react";

const Default = styled.button<Components.Button>(({theme, variant}) => ({
  padding: '10px 20px',
  borderRadius: '15px',
  border: 'none',
  fontSize: '16px',
  fontFamily: theme.font.family.poppins,
  textTransform: 'capitalize',
  cursor: 'pointer',
  fontWeight: 
    variant === 'text' ? 500 : undefined
    || variant === 'contained' ? 300 : undefined
}))

Default.displayName = 'ButtonDefault'

export default memo(Default);