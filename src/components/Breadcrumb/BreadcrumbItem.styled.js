import styled, { css } from 'styled-components';

const StyledBreadcrumbItem = styled.li`
  display: flex;

  &::after {
    color: #6c757d;
    content: '/';
    display: inline-block;
    margin-left: 8px;
    padding-right: 0.5rem;
  }

  &:last-child::after {
    content: '';
  }
`;

export { StyledBreadcrumbItem };
