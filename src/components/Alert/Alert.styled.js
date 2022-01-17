import styled from "styled-components";

const DefaultStyledAlert = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

const StyledAlert = styled(DefaultStyledAlert)(({ theme, variant }) => {
  if (theme[variant]) {
    const option = theme[variant];
    return {
      color: option.color,
      backgroundColor: option.bgColor,
      borderColor: option.borderColor,
    };
  }
  return null;
});

export { StyledAlert };
