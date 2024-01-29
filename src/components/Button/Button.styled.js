import styled, { css } from 'styled-components'

const variantStyles = {
	primary: css`
		background-color: royalblue;
		color: #fce2c2;
	`,
	secondary: css`
		background-color: green;
		color: #fce2c2;
	`,
}

const btnSizes = {
	xl: css`
		padding: 0.5rem 1rem;
		font-size: 1.25rem;
	`,
	large: css`
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
	`,
}

const StyledButton = styled.button`
	--color-alfa: ${props => props.theme.colorAlfa};
	display: inline-block;
	font-weight: 400;
	color: #212529;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	user-select: none;
	padding: ${props => props.theme.padding};
	font-size: ${props => props.theme.fontSize};
	line-height: 1.5;
	border-radius: 0.25rem;
	border: none;
	background-color: var(--color-alfa);
	${props => props.variant && variantStyles[props.variant]};
	${props => props.size && btnSizes[props.size]}
	${props =>
		props.disabled === true &&
		css`
			cursor: not-allowed;
			background-color: rgba(121, 119, 120, 1);
			color: white;
		`};

	&:hover {
		opacity: 0.9;
	}
`

export { StyledButton }
