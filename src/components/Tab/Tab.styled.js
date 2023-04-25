import { css } from "styled-components";
import styled from "styled-components";

const StyledTab = styled.a`
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    margin-bottom: -1px;
    color: #007bff;
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;

    ${(props)=> props.active && css`
        background-color: #fff;
        border-color: #dee2e6 #dee2e6 #fff;
        color: #495057;
    `}

    ${(props)=> props.disabled && css`
        color: #6c757d;
        pointer-events: none;
        cursor: default;
    `}
`;
export default StyledTab;

