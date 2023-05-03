import styled, { keyframes } from "styled-components";

const fadeAnimation = keyframes`
 from { opacity: 0; }
 to { opacity: 1; }
`;

const StyledTabContent = styled.article`
  animation: ${fadeAnimation} 0.3s both;
  display: ${({ eventKey, activeTab }) =>
    eventKey === activeTab ? "block" : "none"};
`;

export default StyledTabContent;
