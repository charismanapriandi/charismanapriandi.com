import styled from "@emotion/styled";
import { memo } from "react";

const Paper = styled.div(({theme}) => ({
  padding: '10px',
  border: `1px solid ${theme.palette.color.border}`,
  borderRadius: theme.borderRadius,
  backgroundColor: theme.palette.background.primary,
}))

export default memo(Paper);
