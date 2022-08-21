import styled from "@emotion/styled";
import { memo } from "react";

const HeadCell = styled.th(({theme}) => ({
  color: theme.palette.text.primary,
  fontSize: theme.font.size.medium,
  fontFamily: theme.font.family.poppins,
  fontWeight: 300,
  textTransform: 'capitalize',
  padding: '10px',
  borderBottom: `1px solid ${theme.palette.color.border}`,
  textAlign: 'left'
}))

export default memo(HeadCell);