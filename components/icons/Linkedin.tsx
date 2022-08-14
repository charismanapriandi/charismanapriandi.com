import styled from '@emotion/styled'
import { LogoLinkedin } from '@emotion-icons/ionicons-solid/LogoLinkedin'
import { memo } from 'react'

const Linkedin = styled(LogoLinkedin)(({theme}) => ({
  color: theme.palette.text.primary,
}))

export default memo(Linkedin)