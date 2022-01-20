import styled from "styled-components";

const StyledTabDescription = styled.div`
  display: ${(props) => (props.isActive ? "block" : "none")};
`;

export default StyledTabDescription;
