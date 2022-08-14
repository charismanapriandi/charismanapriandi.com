import { CloudDownload as Icon } from '@emotion-icons/bootstrap/CloudDownload'
import styled from '@emotion/styled'
import { memo } from 'react'

const Download = styled(Icon)(({theme}) => ({
  color: theme.palette.text.primary
}))

export default memo(Download)