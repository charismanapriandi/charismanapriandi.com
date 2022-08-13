import styled from "@emotion/styled";
import {LogoInstagram as Icon} from '@emotion-icons/ionicons-solid/LogoInstagram'
import { memo } from "react";

const Instagram = styled(Icon)(({ theme }) => ({
  color: theme.palette.text.primary
}))

export default memo(Instagram)