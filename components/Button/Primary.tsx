import styled from "@emotion/styled";
import Default from "./Default";
import { memo } from "react";

const Primary = styled(Default)(({theme, variant = 'contained'}) => ({
  backgroundColor: 
    variant === 'text' ? 'transparent' : ''
    || variant === 'contained' ? theme.palette.color.primary : '',
  color: 
    variant === 'text' ? theme.palette.text.highlight : ''
    || variant === 'contained' ? theme.palette.background.primary : '',
}))

Primary.displayName = 'ButtonPrimary'

export default memo(Primary);