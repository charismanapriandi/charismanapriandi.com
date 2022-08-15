import styled from "@emotion/styled";
import { memo } from "react";

const Paper = styled.div(({theme}) => ({
  padding: '15px',
  borderRadius: theme.borderRadius,
  backgroundColor: theme.palette.background.secondary,
}))

export default memo(Paper);
