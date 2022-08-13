import styled from "@emotion/styled";
import { LogoFacebook as Icon } from '@emotion-icons/ionicons-solid/LogoFacebook'
import { memo } from "react";

const Facebook = styled(Icon)(({theme}) => ({
  color: theme.palette.text.primary,
}))

export default memo(Facebook);