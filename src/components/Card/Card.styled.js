import styled, { css } from "styled-components";

const DefaultStyledCard = styled.div`
  width: 18rem;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`;

const StyledCard = styled(DefaultStyledCard)((props) => props.style);

export { StyledCard };