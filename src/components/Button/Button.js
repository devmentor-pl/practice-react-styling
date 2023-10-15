// button.js
import React from 'react';

import { StyledButton } from './Button.styled';

const Button = props => {
	

	return (
		<StyledButton
			variant={props.variant}
			disabled={props.disabled}
			className={props.active ? 'active' : ''}
			size={props.size}
			style={props.style}
		>
			{props.children}
		</StyledButton>
	);
};

export default Button;
