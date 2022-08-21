import styled from "@emotion/styled";
import {Sunny as Icon} from '@emotion-icons/ionicons-outline/Sunny'
import { memo } from "react";

const Sun = styled(Icon)<Components.Icon>(({theme, color = 'primary'}) => ({
  color: theme.palette.text[color]
}))

export default memo(Sun)