import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
  display: block;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
`;

const StyledAlert = styled(DefaultStyledAlert)(({ theme, variant }) => ({
  backgroundColor: `${theme.variants[variant].bgColor}`,
  color: `${theme.variants[variant].textColor}`,
  borderColor: `${theme.variants[variant].borderColor}`,
}));
export { StyledAlert };
