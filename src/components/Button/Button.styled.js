import styled, { css } from "styled-components";

const defaultStyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  transition: filter 0.15s;
  ${(props) =>
    props.disabled === true &&
    css`
      opacity: 0.5;
    `};
  ${(props) =>
    props.disabled !== true &&
    css`
      cursor: pointer;
      &:hover {
        filter: saturate(0.75);
      }
    `}
`;
const styledButton = styled(defaultStyledButton)`
  background-color: ${({ theme, variant }) =>
    theme.color[variant].backgroundColor};
  color: ${({ theme, variant }) => theme.color[variant].color};
  border-color: ${({ theme, variant }) => theme.color[variant].borderColor};
  padding: ${({ theme, size }) => theme.size[size].padding};
  font-size: ${({ theme, size }) => theme.size[size].fontSize};
  line-height: ${({ theme, size }) => theme.size[size].lineHeight};
  border-radius: ${({ theme, size }) => theme.size[size].borderRadius};
`;

export default styledButton;
