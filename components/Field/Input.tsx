import styled from "@emotion/styled";
import { FC, memo } from "react";
import Label from "./Label";
import Message from "./Message";
import { fieldCss } from "./styles";

const Input: FC<Components.Field.Input> = ({label, error, ...props}) => {
  return (
    <>
      {!!label && <Label>{label}</Label>}
      <input css={fieldCss} {...props as any} />
      {!!error && typeof error === 'string' 
        && <Message type='error'>{error}</Message>
      }
    </>
  )
}

Input.displayName = 'Field Input'

export default memo(Input)