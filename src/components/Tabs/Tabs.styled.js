import styled, { css } from 'styled-components'

const StyledCol = styled.div`
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;
`

const StyledNav = styled.nav`
	display: flex;
	flex-wrap: wrap;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	border-bottom: 1px solid #dee2e6;
`

const StyledDiv = styled.div`
	display: block;
`

export { StyledCol, StyledNav, StyledDiv }
