import styled, { css } from "styled-components";

const DefaultStyledButton = styled.button`
  --color: #212529;
  --bgColor: transparent;
  --borderColor: transparent;
  --bgHover: transparent;
  --borderHover: transparent;
  --padding: 0.375rem 0.75rem;
  --fontSize: 1rem;
  --borderRadius: 0.25rem;
  --opacity: 1;
  --focusShadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  cursor: pointer;
  color: var(--color);
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: var(--bgColor);
  border: 1px solid var(--borderColor);
  padding: var(--padding);
  font-size: var(--fontSize);
  line-height: 1.5;
  border-radius: var(--borderRadius);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-transform: none;
  overflow: visible;
  margin: 0;
  font-family: inherit;
  opacity: var(--opacity);

  &:hover {
    background-color: var(--bgHover);
    border-color: var(--borderHover);
  }

  &:focus {
    outline: 0;
    box-shadow: var(--focusShadow);
    background-color: var(--bgHover);
    border-color: var(--borderHover);
  }
`;

const setStyleOption = (theme, variant, active, disabled) => {
  let option = "";
  if (theme.variant[variant]) {
    option = "default";
    if (active) {
      option = "active";
    }
    if (disabled) {
      option = "disabled";
    }
  }
  return option;
};

const setSizeOption = (theme, size) => {
  let option = "";
  if (theme.size[size]) {
    option = size;
  }
  return option;
};

const generateStyles = (styles, styleObject) => {
  for (const [key, value] of Object.entries(styleObject)) {
    styles += `--${key}: ${value};`;
  }
  return styles;
};

const setButtonStyles = (props) => {
  const { theme, variant = "primary", size, active, disabled } = props;
  let styles = "";
  const styleOption = setStyleOption(theme, variant, active, disabled);
  const sizeOption = setSizeOption(theme, size);
  if (styleOption) {
    styles = generateStyles(styles, theme.variant[variant][styleOption]);
  }
  if (sizeOption) {
    styles = generateStyles(styles, theme.size[sizeOption]);
  }
  if (disabled) {
    styles = generateStyles(styles, theme.disabled);
  }
  return css`
    ${styles}
  `;
};

const StyledButton = styled(DefaultStyledButton)`
  ${setButtonStyles}
`;

export { StyledButton };
