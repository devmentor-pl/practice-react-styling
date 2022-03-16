import styled from 'styled-components';

const StyledBreadcrumbItem = styled.a`
    color: ${({ theme, active }) => (active ? '#6c757d' : theme.color.link.main)};
    cursor: ${({ active }) => (active ? 'default' : 'underline')};

    &:hover,
    &:active {
        color: ${({ theme, active }) => (active ? '#6c757d' : theme.color.link.dark)};
        text-decoration: ${({ active }) => (active ? 'none' : 'underline')};
    }
`;

export default StyledBreadcrumbItem;
