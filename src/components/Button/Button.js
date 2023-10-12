// button.js
import React from 'react';

import { StyledButton } from './Button.styled';

const Button = props => {
	return (
		<StyledButton active={props.active} disabled={props.disabled} size={props.size} style={props.style}>
			{props.children}
		</StyledButton>
	);
};

export default Button;
