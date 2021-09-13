import styled, { css } from 'styled-components';

const DefaultStyledBreadcrumb = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.25rem;
`;

const StyledBreadcrumb = styled(DefaultStyledBreadcrumb)(
    (props) => props.style
);

export { StyledBreadcrumb };