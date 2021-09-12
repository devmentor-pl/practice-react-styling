import styled, { css } from "styled-components";

const DefaultStyledCardTitle = styled.div`
  margin-bottom: 0.7rem;
  font-size: 1.3rem;
`;

const StyledCardTitle = styled(DefaultStyledCardTitle)((props) => props.style);

export { StyledCardTitle };