import styled from "@emotion/styled";
import {Pencil as Icon} from '@emotion-icons/ionicons-outline/Pencil'
import { memo } from "react";

const Pencil = styled(Icon)(({ theme }) => ({
  color: theme.palette.text.primary
}))

export default memo(Pencil)