import styled from "@emotion/styled";
import {Pencil as Icon} from '@emotion-icons/ionicons-outline/Pencil'
import { memo } from "react";

const Pencil = styled(Icon)<Components.Icon>(({ theme, color = 'primary' }) => ({
  color: theme.palette.text[color]
}))

export default memo(Pencil)