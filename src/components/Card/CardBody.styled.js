import styled, { css } from "styled-components";

const DefaultStyledCardBody = styled.div`
  flex: auto;
  min-height: 1px;
  padding: 1.2rem;
`;

const StyledCardBody = styled(DefaultStyledCardBody)((props) => props.style);

export { StyledCardBody };

