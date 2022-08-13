import styled from "@emotion/styled";
import {Sunny as Icon} from '@emotion-icons/ionicons-outline/Sunny'
import { memo } from "react";

const Sun = styled(Icon)(({theme}) => ({
  color: theme.palette.text.primary
}))

export default memo(Sun)