import styled from 'styled-components';

const StyledBreadcrumbItem = styled.li`
    & > * {
        color: ${props => (props.active ? 'grey' : 'babyblue')};
    }
    &:not(:first-of-type):before {
        content: '/';
        margin: 0 7px;
        color: grey;
    }
`;

export default StyledBreadcrumbItem;
