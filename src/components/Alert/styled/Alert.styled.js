import styled from "styled-components";

const StyledAlert = styled.div`
  background-color: ${({ theme, variant }) =>
    variant && theme[variant].backgroundColor};
  border: 1px solid transparent;
  border-color: ${({ theme, variant }) =>
    variant && theme[variant].borderColor};
  border-radius: 0.25rem;
  color: ${({ theme, variant }) => variant && theme[variant].color};
  display: block;
  padding: 0.75rem 1.25rem;
`;

// StyledAlert.defaultProps = {
//   {}
// }

export { StyledAlert };
