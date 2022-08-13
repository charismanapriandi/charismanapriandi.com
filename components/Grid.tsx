import styled from "@emotion/styled";
import { memo } from "react";
import breakpoint from "styles/breakpoint";

const Grid = styled.div<Components.Grid>`
  display: grid;
  gap: ${props => props.gap}px;
  ${props => props.isAutoFit 
    ? `grid-template-columns: repeat(auto-fit, minmax(${props.width}, 1fr));`
    : `
      grid-template-columns: repeat(${props.column.default}, 1fr);
      ${breakpoint('sm')} {
        grid-template-columns: repeat(${props.column.sm}, 1fr);
      };
      ${breakpoint('md')} {
        grid-template-columns: repeat(${props.column.md}, 1fr);
      };
      ${breakpoint('lg')} {
        grid-template-columns: repeat(${props.column.lg}, 1fr);
      };
      ${breakpoint('xl')} {
        grid-template-columns: repeat(${props.column.xl}, 1fr);
      };
    `
  }
`

export default memo(Grid);
