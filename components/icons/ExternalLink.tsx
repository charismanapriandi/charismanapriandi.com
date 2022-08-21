import styled from "@emotion/styled";
import { ExternalLink as Icon } from '@emotion-icons/feather/ExternalLink'
import { memo } from "react";

const ExternalLink = styled(Icon)<Components.Icon>(({theme, color = 'primary'}) => ({
  color: theme.palette.text[color],
}))

export default memo(ExternalLink);