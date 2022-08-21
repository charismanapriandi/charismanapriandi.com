import {CloudUpload as Icon} from '@emotion-icons/bootstrap/CloudUpload'
import styled from '@emotion/styled'
import { memo } from 'react'

const Upload = styled(Icon)<Components.Icon>(({theme, color = 'primary' }) => ({
  color: theme.palette.text[color],
}))

export default memo(Upload)