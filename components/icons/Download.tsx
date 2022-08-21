import { CloudDownload as Icon } from '@emotion-icons/bootstrap/CloudDownload'
import styled from '@emotion/styled'
import { memo } from 'react'

const Download = styled(Icon)<Components.Icon>(({theme, color = 'primary'}) => ({
  color: theme.palette.text[color]
}))

export default memo(Download)