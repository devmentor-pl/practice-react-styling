import React, { useContext } from 'react';
import { StyledNavLink } from './Tab.styled';
import { MyContext } from './Tabs';

const Tab = props => {
	
	const { title, eventKey, disabled } = props;
	const { key, change } = useContext(MyContext);
    
	const handleChange = eventKey => {
		if (disabled !== true) {
			change(eventKey);
		}
	};
	return (
		<StyledNavLink disabled={disabled} onClick={() => handleChange(eventKey)} active={key === eventKey ? true : false}>
			{title}
		</StyledNavLink>
	);
};

export default Tab;
