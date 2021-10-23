import styled from "styled-components";

const StyledButton = styled.button`
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 20px;
    background-color: ${(props) => props.theme.variant.primary};
    width: ${(props) => props.theme.size.big};

    &:active {
        background-color: ${(props) => props.theme.variant.secondary};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export { StyledButton };
