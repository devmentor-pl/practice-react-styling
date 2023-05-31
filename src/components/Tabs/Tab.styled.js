import styled, { css } from 'styled-components';

const StyledTab = styled.a`
	display: block;
	padding: 0.5rem 1rem;
	margin-bottom: -1px;
	border: 1px solid transparent;
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
	text-decoration: none;
	background-color: transparent;

	${({ disabled }) =>
		disabled &&
		css`
			color: #6c757d;
			background-color: transparent;
			border-color: transparent;
			cursor: default;
			pointer-events: none;
		`}

	${({ isActive }) =>
		isActive &&
		css`
			color: #495057;
			background-color: #fff;
			border-color: #dee2e6 #dee2e6 #fff;
		`}

	
	${({ isActive }) =>
		isActive
			? `&:hover {
				color:  #495057;
				border-bottom: none;
				text-decoration: none;
			}`
			: `&:hover {
					border-color: #e9ecef #e9ecef #dee2e6;
					text-decoration: none;
			}`}
`;

export { StyledTab };
