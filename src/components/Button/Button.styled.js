import styled from 'styled-components';

const DefaultStyledButton = styled.button`
	display: inline-block;
	font-weight: 400;
	color: #212529;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
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

const StyledButton = styled(DefaultStyledButton)`
	color: ${({ theme, variant }) => variant && theme[variant].color};
	background-color: ${({ theme, variant, active }) =>
		active
			? theme[variant].active.backgroundColor
			: theme[variant].backgroundColor};
	border-color: ${({ theme, active }) =>
		active ? theme.active.borderColor : theme.borderColor};
	padding: ${({ theme, size }) => size && theme[size].padding};
	font-size: ${({ theme, size }) => size && theme[size].fontSize};
	border-radius: ${({ theme, size }) => size && theme[size].borderRadius};
	opacity: ${({ theme, variant, disabled }) =>
		disabled ? theme[variant].disabled.opacity : 1};

	&:hover {
		${({ theme, variant, disabled }) =>
			disabled ? null : theme[variant].hover}
	}

	&:focus {
		${({ theme, variant }) => theme[variant].focus}
	}
`;

export { StyledButton };
