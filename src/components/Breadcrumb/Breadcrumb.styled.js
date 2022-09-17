import styled from 'styled-components';

const Breadcrumb = styled.ul`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    gap:20px;
    width:100%;
    height:75%;
    border-radius:5px;
    list-style:none;
    background-color: rgb(226, 227, 229);
`

const BreadcrumbItem = styled.li`
    display:flex;
    position:relative;
    justify-content:center;
    align-items:center;
    &::after{
        content: '/';
        position:absolute;
        top:0;
        right:-35%;
    }
    &:last-child::after {
    content: '';
  }
`

const BreadcrumbLink = styled.a`
  ${({active})=> active && 'opacity: 0.7;'}
`

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink };