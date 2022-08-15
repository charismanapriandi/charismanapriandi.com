import styled from "@emotion/styled";
import { memo } from "react";
import breakpoint from "styles/breakpoint";

const Footer = styled.div(() => ({
  padding: '10px 15px 15px 15px',
  [`${breakpoint('md')}`]: {
    padding: '10px 20px 20px 20px',
  }
}))

export default memo(Footer)