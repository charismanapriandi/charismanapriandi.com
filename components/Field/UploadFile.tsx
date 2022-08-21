import styled from "@emotion/styled"
import { FC, memo } from "react"
import { Icon, Image } from ".."
import Label from "./Label"
import Message from "./Message"

const FileUpload: FC<Components.Field.UploadFile> = ({ label, error, value, preview, ...props }) => {
  return (
    <>
      {!!label && <Label>{label}</Label>}
      <LabelLikeField htmlFor={props.name}>
        {preview
          ? (
            <>
              <Image src={preview} alt='preview image' width={70} height={70} />
            </>
          )
          : (
            <>
              <Icon.Upload color="secondary" size={32}/>
              Select File
            </>
          )
        }
      </LabelLikeField>
      <input id={props.name} {...props} type='file' hidden />
      {!!error && typeof error === 'string' 
        && <Message type='error'>{error}</Message>
      }
    </>
  )
}

const LabelLikeField = styled.label(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  backgroundColor: theme.palette.background.secondary,
  fontSize: theme.font.size.medium,
  fontFamily: theme.font.family.poppins,
  fontWeight: 300,
  padding: theme.padding,
}))

export default memo(FileUpload)