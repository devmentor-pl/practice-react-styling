import styled from "styled-components";

const StyledSonnet = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  color: black;
  &:hover {
    color: black;
  }
`;

const ActiveSonnet = styled(StyledSonnet)(() => ({ display: "block" }));
export { StyledSonnet, ActiveSonnet };
