import styled from "@emotion/styled";
import {Trash as Icon} from '@emotion-icons/ionicons-outline/Trash';
import { memo } from "react";

const Trash = styled(Icon)<Components.Icon>(({theme, color = 'primary'}) => ({
  color: theme.palette.text[color]
}))

export default memo(Trash)