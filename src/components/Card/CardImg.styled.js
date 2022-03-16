import styled, { css } from "styled-components";

const topImgStyles = css`
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  flex-shrink: 0;
  width: 100%;
`;

const StyledCardImg = styled.img.attrs(({ src }) => ({
  src,
  alt: "img description",
}))`
  ${(props) => props.variant === "top" && topImgStyles}
`;

export default StyledCardImg;
