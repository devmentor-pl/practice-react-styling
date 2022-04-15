import styled, { css } from 'styled-components';

const NavItem = styled.a`
    display: block;
    background-color: #fff;
    padding: .5rem 1rem;
    ${ props => props.active && css `
        color: #495057;
        border: 1px solid; 
        border-color: #dee2e6 #dee2e6 #fff;
        border-radius: .25rem .25rem 0 0;
        margin-bottom: -1px;
    `}

    ${ props => props.disabled === true && css `
        background-color: transparent;
        border-color: transparent;
        color: #6c757d;
        cursor: default;
        pointer-events: none;
    `}
`

export default NavItem;