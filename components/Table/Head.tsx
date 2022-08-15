import styled from "@emotion/styled";
import { memo } from "react";
import Cell from "./Cell";

const Head = styled.thead(() => ({
  [`${Cell}`]: {
    backgroundColor: 'red'
  }
}))

export default memo(Head)