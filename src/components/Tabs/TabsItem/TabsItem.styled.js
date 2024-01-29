import styled, { css } from 'styled-components'

const StyledTabsItem = styled.li`
	a {
		border: 1px solid transparent;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		display: block;
		padding: 0.5rem 1rem;
		margin-bottom: -1px;

		&.active {
			color: #495057;
			background-color: #fff;
			border-color: #dee2e6 #dee2e6 #fff;
		}
	}
`
export { StyledTabsItem }
