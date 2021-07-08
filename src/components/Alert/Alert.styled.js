import styled from "styled-components";
import { capitalize } from "./../../utils/utils";

const StyledAlert = styled.div`
  --color: ${props =>
    props.variant && props.theme
      ? props.theme[`alert${capitalize(props.variant)}Color`]
      : "#000"};
  --background-color: ${props =>
    props.variant && props.theme
      ? props.theme[`alert${capitalize(props.variant)}BackgroundColor`]
      : "#000"};
  --border-color: ${props =>
    props.variant && props.theme
      ? props.theme[`alert${capitalize(props.variant)}BorderColor`]
      : "transparent"};
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: var(--color);
  background-color: var(--background-color);
  border-color: var(--border-color);
`;

export { StyledAlert };
