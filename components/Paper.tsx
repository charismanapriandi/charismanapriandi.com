import styled from "@emotion/styled";
import { memo } from "react";

const Paper = styled.div(({theme}) => ({
  padding: '10px',
  borderRadius: theme.borderRadius,
  backgroundColor: theme.palette.background.secondary,
  transition: 'all .3s ease-in-out',
  ':hover': {
    boxShadow: theme.boxShadow.sm,
  }
}))

export default memo(Paper);
