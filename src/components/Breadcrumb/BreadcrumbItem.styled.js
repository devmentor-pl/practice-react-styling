import styled from "styled-components";

const StyledBreadItem = styled.li`
list-style-type: none;
  &:nth-child(1) {
    &:before {
      content: none;
    }
  }
  &:before {
    content: "/";
    padding: 10px;
    color: grey;
  }
  ${({ active }) =>
    active &&
    `color: grey;
     `}
`;

export { StyledBreadItem };
