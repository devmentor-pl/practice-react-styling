import styled, {css} from "styled-components";

const DefaultStyledButton = styled.button`
width: 150px;
padding:3px;
background-color: rgb(0,123,255);
border:none;
border-radius:5px;
color:white;
font-size:1rem;
`;

export const StyledButton = styled(DefaultStyledButton)`
${({ size }) => {
    if (size === 'sm') {
       return css`height:40px;`
    }
    if (size === 'lg') {
        return css`height:45px;`
    }
}}
${(props) => {
    return props.isActive ? css`background-color: ${props.theme[props.variant].active};` : css`background-color:${props.theme[props.variant].disabled};`
}}
`