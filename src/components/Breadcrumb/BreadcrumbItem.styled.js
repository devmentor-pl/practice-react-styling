import styled from 'styled-components';

const StyledBreadcrumbItem = styled.li`
  &:not(:first-child)::before {
    display: inline-block;
    padding: 0 0.5rem;
    color: ${({ theme }) => theme.secondaryColor};
    content: '/';
  }
  a {
    color: ${({ active, theme }) =>
      active ? theme.secondaryColor : theme.primaryColor};
    text-decoration: none;
    background-color: transparent;
    &:hover {
      color: ${({ active, theme }) =>
        active ? theme.secondaryColor : theme.hoverColor};
      text-decoration: ${({ active }) => (active ? null : 'underline')};
    }
  }
`;

export { StyledBreadcrumbItem };
