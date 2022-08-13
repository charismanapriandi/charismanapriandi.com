import styled from "@emotion/styled";
import { memo } from "react";

interface Message {
  type: 'error' | 'success'
}

const Message = styled.div<Message>(({theme, type}) => ({
  color: 
    type === 'error' && theme.palette.color.error
    || type === 'success' && theme.palette.color.success
    || 'black',
  fontSize: theme.font.size.small,
  fontWeight: 300,
  marginTop: '5px',
  padding: '0 20px',
}))

export default memo(Message);
