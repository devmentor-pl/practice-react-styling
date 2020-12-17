import styled from "styled-components";

const CardImgStyled = styled.img.attrs(props => ({
  src: props.src,
}))`
  ${props =>
    props.variant === "top" &&
    `
        border-top-left-radius: calc(.25rem - 1px);
        border-top-right-radius: calc(.25rem - 1px);
        flex-shrink: 0;
        width: 100%;
    `}
`;

export { CardImgStyled };
