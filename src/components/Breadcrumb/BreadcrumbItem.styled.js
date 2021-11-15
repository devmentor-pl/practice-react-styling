import styled from 'styled-components';

const DefaultStyledBreadcrumbItem = styled.li(props => props.theme.menu.elements);
const StyledBreadcrumbItem = styled(DefaultStyledBreadcrumbItem)`
    color: ${ props => props.active ? '#6c757d' : '#007bff' };
    &:before {
        ${ props => props.theme.menu.before }
    };
    &:nth-of-type(1) {
        &:before {
            content: unset;
        }
    }
`
export default StyledBreadcrumbItem;