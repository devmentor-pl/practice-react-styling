import styled from 'styled-components';

const StyledTab = styled.a`
	border: 1px solid transparent;
	border-top-left-radius: 0.25rem;
	border-top-right-radius: 0.25rem;
	margin-bottom: -1px;
	padding: 0.5rem 1rem;
	cursor: pointer;
	color: red;

	&:hover {
		border-color: #e9ecef #e9ecef #dee2e6;
		${(props) => props.disabled && 'border-color: transparent;'}
	}
	${(props) => (props.disabled ? 'opacity: 0.5; cursor: default' : '')}

	&:active {
		color: #495057;
		background-color: #fff;
		border-color: #dee2e6 #dee2e6 #fff;
	}
`;

export default StyledTab;
