import styled from "@emotion/styled"
import { motion } from "framer-motion"
import { FC, memo } from "react"

const Radio: FC<Props> = ({label, isSelected, ...props}) => {
  return (
    <>
      <Label 
        whileTap={{scale: 0.9}} 
        isSelected={isSelected} 
        transition={{type: 'spring', stiffness: 200}} 
        htmlFor={`id-${label}`}>
        {label}
      </Label>
      <input id={`id-${label}`} {...props} type='radio' hidden />
    </>
  )
}

interface Props extends Components.Field.Input {
  isSelected: boolean;
}

const Label = styled(motion.label)<Omit<Props, 'name'>>(({isSelected, theme}) => ({
  display: 'block',
  cursor: 'pointer',
  border: `1px solid ${isSelected ? theme.palette.color.primary+'7F' : theme.palette.color.border}`,
  backgroundColor: isSelected ? theme.palette.color.primary+'33' : 'transparent',
  color: isSelected ? theme.palette.text.highlight : theme.palette.text.secondary,
  fontSize: theme.font.size.medium,
  fontWeight: 300,
  fontFamily: theme.font.family.poppins,
  padding: '6px 16px',
  borderRadius: '999px',
  whiteSpace: 'nowrap',
}))

export default memo(Radio)