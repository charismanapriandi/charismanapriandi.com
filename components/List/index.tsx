import styled from "@emotion/styled";
import { memo } from "react";
import Item from "./Item";

const List = styled.ul(() => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
}))

export default Object.assign(memo(List), {
  Item
})