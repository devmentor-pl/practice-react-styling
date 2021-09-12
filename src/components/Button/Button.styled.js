import styled from 'styled-components';

const DefaultStyledButton = styled.button`
    margin-bottom: 1rem;
    font-weight: 400;
	border: none;
    border-radius: 0.25rem;

    &:hover {
        filter: brightness(0.9);
        transition: ease-out 0.2s;
    }
`

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

export {StyledButton}