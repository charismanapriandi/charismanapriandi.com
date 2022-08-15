import styled from "@emotion/styled";
import { memo } from "react";

const Item = styled.li(() => ({
  marginBottom: '20px',
  ':last-child': {
    marginBottom: 0,
  }
}))

Item.displayName = 'ListItem'

export default memo(Item)