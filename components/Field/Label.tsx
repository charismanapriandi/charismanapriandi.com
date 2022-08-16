import styled from "@emotion/styled";
import { memo } from "react";

const Label = styled.label(({theme}) => ({
  color: theme.palette.text.secondary,
  fontWeight: 300,
  fontFamily: theme.font.family.poppins,
  fontSize: theme.font.size.medium,
  marginBottom: '10px',
  display: 'block',
}))

export default memo(Label);