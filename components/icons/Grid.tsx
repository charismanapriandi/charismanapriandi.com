import styled from "@emotion/styled";
import {Grid as Icon} from '@emotion-icons/ionicons-outline/Grid'
import { memo } from "react";

const Grid = styled(Icon)(({ theme }) => ({
  color: theme.palette.text.primary
}))

export default memo(Grid)