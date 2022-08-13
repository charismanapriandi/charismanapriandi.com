import styled from "@emotion/styled";
import { memo } from "react";

const Tag = styled.div(({theme}) => ({
  fontSize: theme.font.size.medium,
  fontWeight: 300,
  color: theme.palette.text.highlight,
  borderRadius: '100px',
  border: `1px solid ${theme.palette.color.border}`,
  padding: '6px 16px',
  backgroundColor: theme.palette.color.primary+'33',
}))

export default memo(Tag);