import { Mail as Icon } from '@emotion-icons/ionicons-solid/Mail'
import styled from '@emotion/styled'
import { memo } from 'react'

const Mail = styled(Icon)<Components.Icon>(({ theme, color = 'primary' }) => ({
  color: theme.palette.text[color]
}))

export default memo(Mail)
