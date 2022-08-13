import styled from "@emotion/styled";
import { Close } from '@emotion-icons/evil/Close'

const Times = styled(Close)(({theme}) => ({
  color: theme.palette.text.primary
}))

export default Times;