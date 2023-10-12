import React from 'react';

import { StyledAlert } from './Alert.styled';

const Alert = props => {
		console.log(props);
	return <StyledAlert style={props.style}>{props.children}</StyledAlert>;
};

export default Alert;