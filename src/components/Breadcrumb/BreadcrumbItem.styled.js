import styled, {css} from 'styled-components';

const activeStyles = css`
    color: #6c757d
`
const BreadcrumbItem = styled.li`
    &+li {
        padding-left: .5rem;
    };
    &+li:before {
        display: inline-block;
        padding-right: .5rem;
        color: #6c757d;
        content: "/";
    };
    &>a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
    };
    ${props => props.active && activeStyles}
`

export default BreadcrumbItem