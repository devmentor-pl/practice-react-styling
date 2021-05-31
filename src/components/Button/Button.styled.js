import styled from 'styled-components';

const DefaultStyledButton = styled.button`
  margin-bottom: 1rem;
  letter-spacing: 1.1px;
  font-weight: 400;
	border: none;
	padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
`;


const StyledButtonSize = styled(DefaultStyledButton)(({theme, size}) => (
	size
		? {
			padding: `${theme.sizes[size].padding}`,
			fontSize: `${theme.sizes[size].fontSize}`,
		}
		: null
));

const StyledButtonActive = styled(StyledButtonSize)(({theme, active, variant}) => (
	active
		? {
			backgroundColor: `${theme[variant].backgroundColor}`,
		}
		: null
));

const StyledButtonDisabled = styled(StyledButtonActive)(({theme, disabled}) => (
	disabled
		? {
			opacity: `${theme.disabled.opacity}`,
		}
		: null
));

const StyledButton = styled(StyledButtonDisabled)(({variant, theme}) => ({
	backgroundColor: `${theme[variant].backgroundColor}`,
	color: `${theme[variant].textColor}`,
}));

export {StyledButton};