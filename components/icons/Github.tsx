import { LogoGithub } from '@emotion-icons/ionicons-solid/LogoGithub'
import styled from '@emotion/styled'

const Github = styled(LogoGithub)<Components.Icon>(({theme, color = 'primary'}) => ({
  color: theme.palette.text[color],
}))

export default Github;