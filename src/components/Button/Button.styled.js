import styled, { css } from "styled-components";

const DefaultStyledButton = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  font-weight: 400px;
  text-align: center;
  color: #000000;
  background-color: #ffffff;
  border-color: #000000;
  &:hover {
    filter: brightness(90%);
  }
`;

const StyledButton = styled(DefaultStyledButton)`
  ${(props) => {
    const { variant, size, disabled, active } = props;
    const objTheme = Object.assign(props.theme[variant], props.theme[size]);

    if (disabled === true) {
      const objThemeDisabled = Object.assign(objTheme, {
        opacity: 0.6,
      });
      return objThemeDisabled;
    } else if (active === true) {
      const objThemeActive = Object.assign(objTheme, {
        filter: "brightness(80%)",
      });
      return objThemeActive;
    } else {
      return objTheme;
    }
  }}
`;

export { StyledButton };
