import styled from 'styled-components';

const StyledCardDiv = styled.div`
	position: relative;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
`;

const StyledCardBodyDiv = styled.div`
	flex: 1 1 auto;
	min-height: 1px;
	padding: 1.25rem;
`;
const StyledTitleH5 = styled.h5``;
const StyledParagraph = styled.p``;

const StyledCardImg = styled.img`
	border-top-left-radius: calc(0.25rem - 1px);
	border-top-right-radius: calc(0.25rem - 1px);
`;

export { StyledCardDiv, StyledCardImg, StyledCardBodyDiv, StyledTitleH5, StyledParagraph };
