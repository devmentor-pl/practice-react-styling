import styled from "styled-components";

const StyledTab = styled.li`
  padding: 1vh;
  cursor: pointer;
  &:hover {
    background-color: grey;
    color: white;
  }
  &.active {
    background-color: grey;
  }
`;
export default StyledTab;
