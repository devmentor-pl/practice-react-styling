import styled from 'styled-components';

const StyledTabs = styled.div`
	.tab-buttons {
		display: flex;
		border-bottom: 1px solid #dee2e6;

		button {
			margin-bottom: -1px;
			padding: 0.5rem 1rem;
			cursor: pointer;
			border: 1px solid transparent;
			border-bottom: none;
			background-color: transparent;
			transition: background-color 0.3s, border-color 0.3s;
			color: #007bff;
			font-size: 1rem;
			line-height: 1.5;
			border-radius: 0.25rem 0.25rem 0 0;

			&:hover {
				text-decoration: none;
			}

			&.active {
				border-color: #dee2e6 #dee2e6 #fff;
				background-color: #fff;
				color: #495057;
			}
			&:focus {
				outline: none;
				box-shadow: none;
			}

			&[disabled] {
				color: #6c757d;
				pointer-events: none;
				background-color: transparent;
				border-color: transparent;
			}
		}
	}
`;

export default StyledTabs;
