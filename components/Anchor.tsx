import styled from "@emotion/styled";
import { FC, memo } from "react";
import { Icon } from ".";

const A = styled.a(({theme}) => ({
  color: theme.palette.color.secondary,
  whiteSpace: 'nowrap'
}))

const Ico = styled(Icon.ExternalLink)(({theme}) => ({
  color: theme.palette.color.secondary,
  marginLeft: '5px',
}))

const Anchor: FC<Components.Anchor> = ({ children, ...props }) => (
  <A {...props as any}>
    {children}
    <Ico size={18} />
  </A>
)

export default memo(Anchor);