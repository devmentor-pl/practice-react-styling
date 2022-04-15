import styled, { css } from "styled-components";

const activeStyle = css`
    color: pink;
`;

const StyledButton = styled.button`
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 16px;
    background-color: ${(props) => props.variant};
    width: ${(props) => props.size};

    ${(props) => props.active && activeStyle}

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export { StyledButton };
