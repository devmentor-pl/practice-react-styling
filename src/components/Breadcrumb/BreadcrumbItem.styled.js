import styled from "styled-components";

const StyledBreadcrumbItem = styled.li`
  display: list-item;
  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;
    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }
  }
  & + li {
    padding-left: 0.5rem;
  }
  & + li::before {
    display: inline-block;
    padding-right: 0.5rem;
    color: #6c757d;
    content: "/";
  }
  color: ${(props) => (props.active ? "#6c757d" : null)};
`;

export { StyledBreadcrumbItem };
