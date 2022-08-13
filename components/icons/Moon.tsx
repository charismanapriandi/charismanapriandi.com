import styled from "@emotion/styled";
import {Moon as Icon} from '@emotion-icons/ionicons-outline/Moon'
import { memo } from "react";

const Moon = styled(Icon)(({theme}) => ({
  color: theme.palette.text.primary
}))

export default memo(Moon)