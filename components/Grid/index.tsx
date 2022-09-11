import styled from "@emotion/styled";
import { memo } from "react";
import breakpoint from "styles/breakpoint";
import Item from "./Item";

const Grid = styled.div<Components.Grid>`
  display: grid;
  gap: ${props => props.gap}px;
  ${props => props.isAutoFit 
    ? props.width 
      && `grid-template-columns: repeat(auto-fit, minmax(${props.width}, 1fr));`
    : props.column
      && `
        grid-template-columns: repeat(${props.column.default}, minmax(0, 1fr));
        ${breakpoint('sm')} {
          grid-template-columns: repeat(${props.column.sm}, minmax(0, 1fr));
        };
        ${breakpoint('md')} {
          grid-template-columns: repeat(${props.column.md}, minmax(0, 1fr));
        };
        ${breakpoint('lg')} {
          grid-template-columns: repeat(${props.column.lg}, minmax(0, 1fr));
        };
        ${breakpoint('xl')} {
          grid-template-columns: repeat(${props.column.xl}, minmax(0, 1fr));
        };
    `
  }
`

export default Object.assign(memo(Grid), {
  Item,
})