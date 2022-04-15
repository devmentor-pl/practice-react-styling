import styled, { css } from "styled-components";

const DefaultStyledAlert = styled.div`
  display: block;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #000000;
  background-color: #ffffff;
  border-color: #000000;
`;

const StyledAlert = styled(DefaultStyledAlert)`
  ${(props) => {
    const { variant } = props;
    return props.theme[variant];
  }}
`;

export { StyledAlert };
