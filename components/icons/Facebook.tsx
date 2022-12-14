import styled from "@emotion/styled";
import { LogoFacebook as Icon } from '@emotion-icons/ionicons-solid/LogoFacebook'
import { memo } from "react";

const Facebook = styled(Icon)<Components.Icon>(({theme, color = 'primary'}) => ({
  color: theme.palette.text[color],
}))

export default memo(Facebook);