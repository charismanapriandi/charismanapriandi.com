import styled from "@emotion/styled";
import { memo } from "react";
import breakpoint from "styles/breakpoint";

const Header = styled.div(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.palette.color.border}`,
  padding: '15px 15px 10px 15px',
  fontWeight: 500,
  color: theme.palette.text.primary,
  textTransform: 'capitalize',
  fontSize: theme.font.size.medium,
  fontFamily: theme.font.family.poppins,
  [`${breakpoint('md')}`]: {
    padding: '20px 20px 10px 20px',
  }
}))

export default memo(Header)