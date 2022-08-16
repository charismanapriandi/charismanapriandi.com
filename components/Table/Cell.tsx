import styled from "@emotion/styled";
import { memo } from "react";

const Cell = styled.td<{inline?: boolean; fit?: boolean}>`
  color: ${({theme}) => theme.palette.text.secondary};
  padding: 10px;
  border-bottom: 1px solid ${({theme}) => theme.palette.color.border};
  font-weight: 300;
  font-size: ${({theme}) => theme.font.size.medium};
  ${({fit}) => `
      ${fit 
        ? `width: .1%;`
        : ''
      }
    `
  }
`

export default memo(Cell);