import React from 'react';

import { StyledButton } from './Alert.styled';

const Button = props => {
		console.log(props);
	return <StyledButton style={props.style}>{props.children}</StyledButton>;
};

export default Button;