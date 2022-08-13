import styled from "@emotion/styled";

const Row = styled.div<Components.Row>(({alignItems, flexWrap, justifyContent, gap = 0}) => ({
  display: 'flex',
  alignItems: alignItems,
  justifyContent: justifyContent,
  gap: gap+'px',
  flexWrap: flexWrap
}));

export default Row;