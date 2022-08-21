import Icon from "./Icon";

import styled from "@emotion/styled";

const Button = styled.button<Components.Button>(({theme, variant = 'contained', color = 'primary'}) => ({
  padding: '10px 20px',
  borderRadius: theme.borderRadius,
  width: 'fit-content',
  border: 'none',
  fontSize: '16px',
  fontFamily: theme.font.family.poppins,
  textTransform: 'capitalize',
  cursor: 'pointer',
  fontWeight: 
    variant === 'text' ? 500 : undefined
    || variant === 'contained' ? 300 : undefined,
  backgroundColor: variant === 'contained' ? theme.palette.color[color] : 'transparent',
  color: variant === 'text' ? theme.palette.color[color] : 'white'
}))

export default Object.assign(Button, {
  Icon,
});