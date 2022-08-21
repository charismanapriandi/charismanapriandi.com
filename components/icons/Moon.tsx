import styled from "@emotion/styled";
import {Moon as Icon} from '@emotion-icons/ionicons-outline/Moon'
import { memo } from "react";

const Moon = styled(Icon)<Components.Icon>(({theme, color = 'primary'}) => ({
  color: theme.palette.text[color]
}))

export default memo(Moon)