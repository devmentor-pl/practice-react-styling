import React from 'react';
import StyledTab from './Tab.styled';

const Tab = ({ active, content }) => {
	return <StyledTab active={active}>{content}</StyledTab>;
};

export default Tab;
