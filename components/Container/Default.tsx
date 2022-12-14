import styled from "@emotion/styled";
import { memo } from "react"

const Default = styled.div(() => ({
  width: '100%',
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '0 20px',
}))

Default.displayName = 'ContainerDefault'

export default memo(Default);