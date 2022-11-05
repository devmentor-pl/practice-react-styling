import styled from "styled-components";

const defaultStyledAlert = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

const StyledAlert = styled(defaultStyledAlert)`
  background-color: ${({ theme, variant }) => theme[variant].backgroundColor};
  color: ${({ theme, variant }) => theme[variant].color};
  border-color: ${({ theme, variant }) => theme[variant].borderColor};
`;

// ${(props) => props.theme.primary}
export { StyledAlert };
