import styled from '@emotion/styled'
import { LogoLinkedin } from '@emotion-icons/ionicons-solid/LogoLinkedin'
import { memo } from 'react'

const Linkedin = styled(LogoLinkedin)<Components.Icon>(({theme, color = 'primary'}) => ({
  color: theme.palette.text[color],
}))

export default memo(Linkedin)