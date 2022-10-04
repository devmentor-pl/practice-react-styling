import styled from "styled-components";

const DefaultStyledAlert = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

export const StyledAlert = styled(DefaultStyledAlert)(
  ({ theme, variant }) => theme.alert[variant]
);

export default StyledAlert;
