import styled, { css } from "styled-components";

const StyledCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  border-radius: 0.25rem;
`;

const StyledImg = styled.img.attrs((props) => ({ src: props.src }))`
  width: 100%;
  border-style: none;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
`;

const StyledBody = styled.div`
  flex: 1 1 auto;
  padding: 1.25rem;
  min-height: 1px;
`;

const StyledTitle = styled.div`
  margin-bottom: 0.75rem;
  h5 {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
  }
`;

const StyledText = styled.p`
  margin-top: 0;
  margin-bottom: 1rem;
  display: block;
`;

export { StyledCard, StyledImg, StyledBody, StyledTitle, StyledText };
