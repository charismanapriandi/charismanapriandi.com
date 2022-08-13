import styled from "@emotion/styled";
import { memo } from "react";
import Item from './Item';

const Form = styled.form(() => ({
  // display: 'flex',
  // flexDirection: 'column',
  // gap: '10px',
}))

export default Object.assign(memo(Form), {
  Item,
})