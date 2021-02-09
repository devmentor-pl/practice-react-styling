import styled from 'styled-components';

const DefaultButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

const StyledVariantButton = styled(DefaultButton)(
  ({ theme, variant, size }) => ({
    color: `${theme.variants[variant].textColor}`,
    backgroundColor: `${theme.variants[variant].bgColor}`,
    borderColor: `${theme.variants[variant].borderColor}`,
    padding: `${theme.sizes[size].padding}`,
    fontSize: `${theme.sizes[size].fontSize}`,
    lineHeight: `${theme.sizes[size].lineHeight}`,
    borderRadius: `${theme.sizes[size].borderRadius}`,
  })
);

const StyledActiveButton = styled(StyledVariantButton)(
  ({ theme, variant, active }) =>
    active
      ? {
          backgroundColor: `${theme.variants[variant].active.bgColor}`,
          borderColor: `${theme.variants[variant].active.borderColor}`,
        }
      : null
);

const StyledButton = styled(StyledActiveButton)(({ theme, disabled }) =>
  disabled ? { opacity: `${theme.disabled.opacity}` } : null
);

export { StyledButton };
