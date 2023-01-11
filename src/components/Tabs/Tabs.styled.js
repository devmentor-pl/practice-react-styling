import styled from "styled-components";

const StyledNav = styled.nav.attrs(props => ({
    onClick: props.onSelect,
}))`
    border-bottom: 1px solid #dee2e6;
    display: flex;

`
const StyledNavLink = styled.a.attrs(props => ({
    href: '#',
    active: props.active,
    disabled: props.disabled
}))`
    display: block;

    padding: .5rem 1rem;
    margin-bottom: -1px;
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    ${props=> props.active 
    ? {
        color: '#495057',
        backgroundColor: '#fff',
        borderColor: '#dee2e6 #dee2e6 #fff',
    } 
    : {borderColor: 'transparent'}}
    ${props => props.disabled
        ? {
            color: '#6c757d',
        } 
        : null 
    }
    &:hover{
        text-decoration: none;
        color: indigo;
        ${props => props.active == false 
            ? {
                backgroundColor: '#fff',
                borderColor: '#dee2e6'
            }
            : {
                color: 'inherit',
            }
            }
        ${props => props.disabled
            ? {
                color: '#6c757d',
                cursor: 'default',
                borderColor: '#fff #fff #dee2e6 #fff',
            } 
            : null 
        }
    }
`

const StyledDiv = styled.div`

`
const StyledParagraph = styled.p`
`
export {StyledNav, StyledNavLink, StyledDiv, StyledParagraph}