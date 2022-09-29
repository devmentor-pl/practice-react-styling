import styled from "styled-components";

const DefaultStyledAlert = styled.div`
  display: block;
  border: 1px solid transparent;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
`;

const StyledAlert = styled(DefaultStyledAlert)`
  ${(props) => {
    const { variant } = props;
    return props.theme[variant];
  }}
`;

export { StyledAlert };
