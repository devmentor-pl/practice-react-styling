import styled, { css } from 'styled-components';

const StyledBreadcrumbItem = styled.li`
    &:not(:first-of-type):before {
        content: '/';
        margin: 0 7px;
        color: grey;
    }
`;

const StyledLinkItem = styled.a`
    ${props =>
        props.active &&
        css`
            color: grey;
            pointer-events: none;
        `}
`;

export { StyledBreadcrumbItem, StyledLinkItem };
