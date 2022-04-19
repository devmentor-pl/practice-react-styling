import styled, {css} from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
`;

const StyledSpan = styled.span `
        display: block;
        padding: 0.5rem 1rem;
        cursor: pointer;
        color: #007bff;
        border: 1px solid transparent;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        margin-bottom: -1px;

    ${(props)=> props.active && css`
        color: #495057;
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
    `}

    ${(props)=> props.disabled && css`
        color: #6c757d;
        pointer-events: none;
        cursor: default;
    `}
`;

export {StyledNav,StyledSpan};