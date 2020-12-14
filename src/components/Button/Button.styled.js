import styled from "styled-components";
import { capitalize } from "./../../utils/utils";

const StyledButton = styled.button`
  --background-color: ${props =>
    props.variant && props.theme
      ? props.theme[`button${capitalize(props.variant)}BackgroundColor`]
      : "#fff"};
  --border-color: ${props =>
    props.variant && props.theme
      ? props.theme[`button${capitalize(props.variant)}BorderColor`]
      : "transparent"};
  --hover-background-color: ${props =>
    props.variant && props.theme
      ? props.theme[`button${capitalize(props.variant)}HoverBackgroundColor`]
      : "#fff"};
  --hover-border-color: ${props =>
    props.variant && props.theme
      ? props.theme[`button${capitalize(props.variant)}HoverBorderColor`]
      : "transparent"};
  --padding: ${props =>
    props.size && props.theme
      ? props.theme[`button${capitalize(props.size)}Padding`]
      : "0.375rem 0.75rem"};
  --font-size: ${props =>
    props.size && props.theme
      ? props.theme[`button${capitalize(props.size)}FontSize`]
      : "1rem"};
  --border-radius: ${props =>
    props.size && props.theme
      ? props.theme[`button${capitalize(props.size)}BorderRadius`]
      : "0.25rem"};
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

export { StyledButton };
