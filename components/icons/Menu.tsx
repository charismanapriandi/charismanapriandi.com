import styled from "@emotion/styled";
import { FC, memo } from "react";

const Menu: FC<Components.IconSvg> = ({size = 25, color, ...props}) => (
  <svg {...props} width={size} height={size} viewBox={`0 0 ${25} ${25}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect width="10" height="10" rx="3" />
    <Rect x="15" y="15" width="10" height="10" rx="3" fillOpacity="0.5" />
    <Rect y="15" width="10" height="10" rx="3" />
    <Rect x="15" width="10" height="10" rx="3" />
  </svg>
)

const Rect = styled.rect(({theme}) => ({
  fill: theme.palette.text.primary
}))

export default memo(Menu);