import styled from "@emotion/styled";
import { Close } from '@emotion-icons/evil/Close'

const Times = styled(Close)<Components.Icon>(({theme, color = 'primary'}) => ({
  color: theme.palette.text[color]
}))

export default Times;