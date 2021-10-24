import styled, { css } from "styled-components";

const activeStyle = css`
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    & > a {
        color: black;
    }
`;

const disabledStyle = css`
    border: none;
    cursor: auto;

    &:hover {
        border: none;
    }
    & > a {
        color: #ccc;
        cursor: auto;
    }
`;

const StyledTabItem = styled.li`
    display: inline-block;
    list-style: none;
    padding: 0.5rem 0.75rem;
    border: 1px solid transparent;
    &:hover {
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    & > a:hover {
        text-decoration: none;
    }

    ${(props) => props.active && activeStyle}
    ${(props) => props.disabled && disabledStyle}
`;

export default StyledTabItem;
