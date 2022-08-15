import styled from "@emotion/styled";
import { memo } from "react";
import breakpoint from "styles/breakpoint";

const Item = styled.div<Components.Form.Item>(({isSideBySide}) => `
  margin-bottom: 10px;
  display: ${isSideBySide ? 'grid' : 'block'};
  gap: 15px;
  margin-bottom: 15px;
  ${isSideBySide && `
      grid-template-columns: repeat(1, 1fr);
      ${breakpoint('md')} {
        grid-template-columns: repeat(2, 1fr);
      }
    `
  }
`)

Item.displayName = 'Form Item'

export default memo(Item)