import styled from 'styled-components'

const StyledBreadCrumb = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: .25rem;
    
    `
const StyledItem = styled.li`
   
    &:not(:last-child):after{
        display: inline-block;
        padding-left: .5rem;
        padding-right: .5rem;
        color: #6c757d;
        content: "/";
    }
`

const StyledLink = styled.a.attrs(props => ({
    href: props.href,
    active: props.isActive
}))`
    &:hover {
        color: ${props=>props.isActive ? 'none' : 'inherit'}
    }
    color: ${props => props.isActive ? '#6c757d' : '#007bff'}
`
export {StyledBreadCrumb, StyledItem, StyledLink}