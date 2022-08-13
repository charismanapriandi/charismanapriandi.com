import Handle from "./Handle";
import styled from '@emotion/styled';
import { memo } from "react";

const Toggle = styled.div<Components.Toggle.Switch>(({theme, isOn}) => ({
  width: '60px',
  height: '35px',
  backgroundColor: theme.palette.background.secondary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: isOn ? 'flex-end' : 'flex-start',
  borderRadius: '50px',
  padding: '3px',
  border: `1px solid ${theme.palette.color.border}`,
  cursor: 'pointer',
}))

Toggle.displayName = 'ToggleSwitch'

export default Object.assign(memo(Toggle), {
  Handle,
})