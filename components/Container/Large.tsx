import styled from "@emotion/styled";
import { memo } from "react";
import Default from "./Default";

const Large = styled(Default)(({}) => ({
  maxWidth: '1392px'
}))

Large.displayName = 'ContainerLarge'

export default memo(Large);