import styled, { css } from "styled-components";

const StyledCardImg = styled.img.attrs(props => ({
  src: props.src
}))`
  vertical-align: middle;
  border-style: none;

${props => props.variant === 'top' && css`
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    flex-shrink: 0;
    width: 100%;
  `}
  
${props => props.variant === 'bottom' && css`
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
    flex-shrink: 0;
    width: 100%;
  `}
`

export { StyledCardImg }