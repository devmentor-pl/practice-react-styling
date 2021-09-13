import styled, { css } from 'styled-components';

const DefaultStyledBreadcrumbItem = styled.li`
    display: list-item;
    color: #000000;
    &:first-child::before {
        display: none;
    }
`;

const StyledBreadcrumbItem = styled(DefaultStyledBreadcrumbItem)`
    ${(props) => {
        const { href, active } = props;
        if (href !== undefined) {
            const hrefStyled = {
                color: '#007bff',
            };
            return hrefStyled;
        }
        if (active === true) {
            const activeStyled = {
                color: '#6c757d',
        };
            return activeStyled;
        }
    }}
`;

export { StyledBreadcrumbItem };