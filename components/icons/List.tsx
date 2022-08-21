import styled from "@emotion/styled";
import {List as Icon} from '@emotion-icons/ionicons-outline/List'
import { memo } from "react";

const List = styled(Icon)<Components.Icon>(({ theme, color = 'primary' }) => ({
  color: theme.palette.text[color]
}))

export default memo(List)