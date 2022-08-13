import styled from '@emotion/styled'

const Handle = styled.div(({theme}) => ({
  width: '28px',
  height: '28px',
  backgroundColor: theme.palette.background.primary,
  borderRadius: '28px',
  flexShrink: 0,
}))

Handle.displayName = 'ToggleHandle'

export default Handle;
