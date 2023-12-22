import styled from "styled-components";

const StyledTabContent = styled.article`
  display: ${({ eventKey, activeTab }) => eventKey === activeTab ? "block" : "none"};
  `;

export default StyledTabContent;