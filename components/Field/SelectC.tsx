import { css } from "@emotion/react";
import styled from "@emotion/styled";
import useClickOutside from "hook/useClickDetection";
import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Icon, Text } from "..";
import Label from './Label';
import Message from "./Message";
import { fieldCss } from "./styles";

const Select: FC<Components.Field.SelectC> = ({label, options, setValue, error, ...props}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [selected, setSelected] = useState<Common.OptionValues>()
  const elRef = useRef(null)

  const handleFocus = () => setIsFocus(true)
  const handleBlur = useCallback(() => {setIsFocus(false)}, [setIsFocus])
  const handleSelect = (value: string) => {
    setValue(props.name ? props.name : '', value)
    handleBlur()
  }
  
  useClickOutside(elRef, handleBlur)

  useEffect(() => {
    options.map(item => {
      if (item.value === props.value) {
        setSelected(item)
      }
    })
  }, [options, props.value])
  
  return (
    <>
      {!!label && <Label>{label}</Label>}
      <div ref={elRef} css={{position: 'relative'}}>
        <div css={{position: 'relative'}}>
          <input 
            css={fieldCss}
            onFocus={handleFocus}
            readOnly
            value={selected ? selected.label : 'Select'}/>
          <Icon.ChevronDown css={arrowCss} size={24} />
        </div>
        <input {...props} hidden/>
        <Options isOpen={isFocus}>
          {options.length > 0
            ? options.map((item, index) => (
                <Option 
                  onClick={() => handleSelect(item.value)} 
                  isSelected={props.value === item.value} 
                  key={index}>
                  <Text color={props.value === item.value ? 'highlight' : 'secondary'}>{item.label}</Text>
                </Option>
              ))
            : (
              <Text css={{padding: '10px 0'}} textAlign="center" color="secondary">No options</Text>
            )}
        </Options>
      </div>
      {!!error && typeof error === 'string' 
        && <Message type='error'>{error}</Message>
      }
    </>
  )
}

const Options = styled.ul<{isOpen: boolean}>(({isOpen, theme}) => ({
  listStyle: 'none',
  position: 'absolute',
  overflow: 'auto',
  width: '100%',
  margin: '10px 0 0 0',
  borderRadius: theme.borderRadius,
  display: isOpen ? 'block' : 'none',
  border: `1px solid ${theme.palette.color.border}`,
  background: theme.palette.background.secondary,
}))

const Option = styled.li<{isSelected: boolean}>(({theme, isSelected}) => ({
  padding: theme.padding,
  cursor: 'pointer',
  transition: 'all .2s ease-in-out',
  backgroundColor: isSelected ? theme.palette.color.primary+'1A' : 'transparent',
  ':hover': {
    background: theme.palette.color.primary+'1A'
  }
}))

const arrowCss = css({
  position: 'absolute',
  top: '50%',
  right: '20px',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
})

export default memo(Select);