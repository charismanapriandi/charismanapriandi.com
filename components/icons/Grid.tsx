import styled from "@emotion/styled";
import {Grid as Icon} from '@emotion-icons/ionicons-outline/Grid'
import { memo } from "react";

const Grid = styled(Icon)<Components.Icon>(({ theme, color = 'primary' }) => ({
  color: theme.palette.text[color]
}))

export default memo(Grid)