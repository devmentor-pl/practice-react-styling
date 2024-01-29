import styled, { css } from 'styled-components'

const StyledTabsText = styled.p`
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	text-align: left;
	display: none;

	&.active {
		display: block;
	}
`
export { StyledTabsText }
