import styled, {css} from "styled-components";

const StyledButton = styled.button`
    font-size: 20px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    color: #fff;
    padding: 0.5rem 1rem;
    transition: 0.5s;
    ${ ({variant, theme,disabled,active}) => {
        const {backgroundColor,hoverBackgroundColor} = theme.variants[variant] || {};


        if (disabled) {
            return css`
                background-color: gray; 
                cursor: not-allowed;
            `;
        }

        if (!active) {
            return css`
                cursor: not-allowed;
                background-color: ${hoverBackgroundColor}
            `
        }

        return css `
            background-color: ${backgroundColor};
            &:hover {
                background-color: ${hoverBackgroundColor}
            }
        `;
        } 
    };
`

export default StyledButton