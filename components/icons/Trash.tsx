import styled from "@emotion/styled";
import {Trash as Icon} from '@emotion-icons/ionicons-outline/Trash';
import { memo } from "react";

const Trash = styled(Icon)(({theme}) => ({
  color: theme.palette.text.primary
}))

export default memo(Trash)