import styled from 'styled-components';

const StyledBreadcrumbItem = styled.li`
  &:not(:first-child)::before {
    display: inline-block;
    padding: 0 0.5rem;
    color: ${({ theme }) => theme.secondary};
    content: '/';
  }
  a {
    color: ${({ active, theme }) => (active ? theme.secondary : theme.primary)};
    text-decoration: none;
    background-color: transparent;
    &:hover {
      color: ${({ active, theme }) =>
        active ? theme.secondary : theme.hoverColor};
      text-decoration: ${({ active }) => (active ? null : 'underline')};
    }
  }
`;

export { StyledBreadcrumbItem };
