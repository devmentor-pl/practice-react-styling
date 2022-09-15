import styled, {css} from "styled-components";

const DefaultStyledButton = styled.button`
width: 13%;
height:90%;
padding:5px 0;
background-color: rgb(0,123,255);
border:none;
border-radius:5px;
color:white;
font-size:1.2rem;
`;

export const StyledButton = styled(DefaultStyledButton)`
${({ size }) => {
   return size === 'lg' && css`
    width: 26% ;
    height: 90% ;
    `
}}
${(props) => {
    return props.isActive ? css`background-color: ${props.theme[props.variant].active};` : css`background-color:${props.theme[props.variant].disabled};`
}}
`