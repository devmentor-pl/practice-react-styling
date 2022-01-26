import React from 'react';

import StyledTab from './Tab.styled';

const Tab = (props) => {
	const { title, disabled, content } = props;

	return (
		<StyledTab disabled={disabled} data-content={content}>
			{title}
		</StyledTab>
	);
};

export default Tab;
