import styled, { css } from 'styled-components';

const StyledBreadcrumbItem = styled.li`
:not(:first-child) {
    ::before {
        display: inline-block;
        padding-right: .5rem;
        padding-left: .5rem;
        color: #6c757d;
        content: "/";
    }
}

${props => props.theme.active && css`
    color: #6c757d;
    `};
`

export { StyledBreadcrumbItem };