import styled from "@emotion/styled";
import { memo } from "react";
import Head from "./Head";
import Body from "./Body";
import Row from "./Row";
import HeadCell from "./HeadCell";
import Cell from "./Cell";

const Table = styled.table(() => ({
  width: '100%',
  borderCollapse: 'collapse'
}))

export default Object.assign(memo(Table), {
  Body,
  Head,
  Row,
  HeadCell,
  Cell
})