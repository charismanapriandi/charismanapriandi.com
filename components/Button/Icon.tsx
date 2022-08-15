import styled from "@emotion/styled";
import { memo } from "react";
import Default from "./Default";

interface IconProps {
  color?: 'primary' | 'secondary' | 'error' | 'success';
  size?: number;
}

const Icon = styled(Default)<IconProps>(({theme, color = 'primary', size = 24}) => ({
  padding: '5px',
  borderRadius: '5px',
  backgroundColor: theme.palette.color[color],
  width: `${size}px`,
  height: `${size}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

Icon.displayName = 'ButtonIcon';

export default memo(Icon)