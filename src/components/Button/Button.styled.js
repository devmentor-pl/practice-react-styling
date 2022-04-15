import styled, { css } from "styled-components";

const DefaultStyledButton = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  font-weight: 350px;
  text-align: center;
  color: #ffffff;
  background-color: #ffffff;
  &:hover {
    filter: brightness(90%);
  }
`;

const StyledButton = styled(DefaultStyledButton)`
  ${(props) => {
    const { variant, size, disabled, active } = props;


    const theme = Object.assign(props.theme[variant], props.theme[size]);
    if (disabled === true) {
      const buttonDisabled = Object.assign(theme, {
        opacity: 0.6,
      });
      return buttonDisabled;
    } else if (active === true) {
      const buttonActive = Object.assign(theme, {
        filter: "brightness(80%)",
      });
      return buttonActive;
    } else {
      return theme;
    }
  }}
`;

export { StyledButton };