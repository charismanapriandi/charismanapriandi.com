import styled from "@emotion/styled";
import {LogoInstagram as Icon} from '@emotion-icons/ionicons-solid/LogoInstagram'
import { memo } from "react";

const Instagram = styled(Icon)<Components.Icon>(({ theme, color = 'primary' }) => ({
  color: theme.palette.text[color]
}))

export default memo(Instagram)