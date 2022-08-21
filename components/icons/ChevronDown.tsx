import { ChevronDown as Icon } from '@emotion-icons/ionicons-outline/ChevronDown'
import styled from '@emotion/styled'
import { memo } from 'react'

const ChevronDown = styled(Icon)<Components.Icon>(({theme, color = 'primary'}) => ({
  color: theme.palette.text[color]
}))

export default memo(ChevronDown)