import styled, {css} from 'styled-components';

const StyledBreadcrumbItem = styled.li`
    color: ${props => props.theme.colorActive};
    margin-right: 5px;


    &:not(:first-child) {
        &::before {
            display: inline-block;
            padding-right: 0.5rem;
            content: "/ ";
        }
    }
`
export { StyledBreadcrumbItem };

