import React from 'react';

import StyledTab from './Tab.styled';

const Tab = (props) => {
	const { title, disabled } = props;

	return <StyledTab disabled={disabled}>{title}</StyledTab>;
};

export default Tab;
