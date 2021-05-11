import styled from "styled-components";

const StyledSonnet = styled.div`
  position: absolute;
  top: 100%;
  display: none;
`;

const ActiveSonnet = styled(StyledSonnet)(() => ({ display: "block" }));
export { StyledSonnet, ActiveSonnet };
