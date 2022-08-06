import styled, {css} from 'styled-components';



const StyledBreadcrumbItem = styled.li`
${props =>
    props.active &&
    `
      color: #6c757d;
    `}
  & + & {
    padding-left: 0.5rem;
    color: #6c757d;
  }
  & + &::before {
    content: "/";
    color: #6c757d;
    display: inline-block;
    padding-right: 0.5rem;
  }
`; 



export default StyledBreadcrumbItem