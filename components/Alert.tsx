import styled from "@emotion/styled";

interface Alert {
  type: 'error' | 'success'
}

const Alert = styled.div<Alert>(({theme, type}) => ({
  padding: theme.padding,
  backgroundColor: theme.palette.color[type]+'4D',
  color: theme.palette.color[type],
  borderRadius: theme.borderRadius,
  fontSize: theme.font.size.small,
  fontFamily: theme.font.family.poppins,
}))

export default Alert;