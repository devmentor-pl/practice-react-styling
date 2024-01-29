import styled, { css } from 'styled-components'

const variantStyles = {
	primary: css`
		background-color: red;
		color: #fce2c2;
	`,
	secondary: css`
		background-color: green;
		color: #fce2c2;
	`,
}

const StyledAlert = styled.div`
	--color-alfa: ${props => props.theme.colorAlfa};
	display: block;
	border: 1px solid darken(var(--color-alfa), 10%);
	background-color: var(--color-alfa);
	${props => props.variant && variantStyles[props.variant]};
	border-radius: 5px;
	padding: 12px 15px;
`

export { StyledAlert }
