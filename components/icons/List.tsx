import styled from "@emotion/styled";
import {List as Icon} from '@emotion-icons/ionicons-outline/List'
import { memo } from "react";

const List = styled(Icon)(({ theme }) => ({
  color: theme.palette.text.primary
}))

export default memo(List)