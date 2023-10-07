import styled from 'styled-components';

const DefaultStyledBreadcrumbItem = styled.li`
    color: ${({active}) => active ? '#6c757d' : '#212529'};
    &+& {
        padding-left: 0.5rem;
    }
    & + &::before {
        display: inline-block;
        padding-right: 0.5rem;
        color: #6c757d;
        content: "/";
    }
`;

const StyledBreadcrumbItem = styled(DefaultStyledBreadcrumbItem)(({variant, theme}) => theme.breadcrumb[variant])


export default StyledBreadcrumbItem;