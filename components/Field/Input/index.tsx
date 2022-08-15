import styled from "@emotion/styled";

const Input = styled.input(({theme}) => ({
  padding: '10px 20px',
  borderRadius: theme.borderRadius,
  backgroundColor: theme.palette.background.secondary,
  border: 'none',
  fontSize: theme.font.size.medium,
  width: '100%',
  fontFamily: theme.font.family.poppins,
  fontWeight: 300,
  color: theme.palette.text.secondary,
  transition: 'all .3s ease-in-out',
  "::placeholder, :-moz-placeholder, ::-webkit-input-placeholder, ::-ms-input-placeholder": {
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
    fontSize: theme.font.size.medium,
  },
  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 1px ${theme.palette.color.primary}`,
    "::placeholder, :-moz-placeholder, ::-webkit-input-placeholder, ::-ms-input-placeholder": {
      color: theme.palette.text.highlight,
    }
  }
}))

Input.displayName = 'Field Input'

export default Object.assign(Input, {})