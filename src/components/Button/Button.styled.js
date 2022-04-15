import styled, { css } from "styled-components";
import { capitalize } from "./../../utils/utils";

const themeToCSS = {
  variant: {
    "--background-color": "buttonBackgroundColor",
    "--border-color": "buttonBorderColor",
    "--hover-background-color": "buttonHoverBackgroundColor",
    "--hover-border-color": "buttonHoverBorderColor",
  },
  size: {
    "--padding": "buttonPadding",
    "--font-size": "buttonFontSize",
    "--border-radius": "buttonBorderRadius",
  },
};

const generateStyles = props => {
  let styles = "";

  if (props.theme) {
    for (const propsName in themeToCSS) {
      if (props[propsName]) {
        for (const variable in themeToCSS[propsName]) {
          let themeKey =
            themeToCSS[propsName][variable] + capitalize(props[propsName]);

          if (propsName === "variant") {
            if (props.active) {
              themeKey += "Active";
            } else if (props.disabled) {
              themeKey += "Disabled";
            }
          }

          styles += `${variable}: ${props.theme[themeKey]};`;
        }
      }
    }

    if (props.disabled) {
      styles += `
        opacity: .65;
      `;
    }
  }

  return css`
    ${styles}
  `;
};

const DefaultStyledButton = styled.button`
  --background-color: #fff;
  --border-color: transparent;
  --hover-background-color: #fff;
  --hover-border-color: transparent;
  --padding: 0.375rem 0.75rem;
  --font-size: 1rem;
  --border-radius: 0.25rem;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: var(--padding);
  font-size: var(--font-size);
  line-height: 1.5;
  border-radius: var(--border-radius);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  color: #fff;
  background-color: var(--background-color);
  border-color: var(--border-color);

  &:hover {
    background-color: var(--hover-background-color);
    border-color: var(--hover-border-color);
  }
`;

const StyledButton = styled(DefaultStyledButton)`
  ${generateStyles}
`;

export { StyledButton };
