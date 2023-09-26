import React from 'react';
import styled from 'styled-components';

const StyledCardText = styled.p`
	margin-top: 0;
`;

const CardText = ({ children }) => {
	return <StyledCardText>{children}</StyledCardText>;
};

export default CardText;
