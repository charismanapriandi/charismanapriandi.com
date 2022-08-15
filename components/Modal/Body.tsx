import styled from "@emotion/styled";
import { memo } from "react";
import breakpoint from "styles/breakpoint";

const Body = styled.div(() => ({
  overflow: 'auto',
  flex: 1,
  padding: '10px 15px',
  [`${breakpoint('md')}`]: {
    padding: '10px 20px',
  }
}))

export default memo(Body)