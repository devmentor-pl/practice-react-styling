import styled from 'styled-components';

const StyledCardImg = styled.img`
	-ms-flex-negative: 0;
	flex-shrink: 0;
	width: 100%;
	vertical-align: middle;
	border-style: none;

	${({ variant }) =>
		variant === 'top'
			? `
				border-top-left-radius: calc(0.25rem - 1px);
				border-top-right-radius: calc(0.25rem - 1px)`
			: variant === 'bottom'
			? `border-bottom-right-radius: calc(0.25rem - 1px);
    		border-bottom-left-radius: calc(0.25rem - 1px);`
			: null}
`;

export { StyledCardImg };
