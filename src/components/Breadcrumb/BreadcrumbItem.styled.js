import styled from 'styled-components';

const StyledBreadcrumbItem = styled.li`
    padding-left: 0.5rem;

    a {
        color: ${(props)=> props.active ? '#6c757d' : `#007bff`};
        text-decoration: none;
        background-color: transparent;
    }

    &:first-child::before {
        display:none
    }

    &:before {
        display: inline-block;
        padding-right: 0.5rem;
        color: #6c757d;
        content: "/";
    }
`;


export {StyledBreadcrumbItem};