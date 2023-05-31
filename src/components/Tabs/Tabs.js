import React, { useState } from 'react';
import { StyledTabs } from './Tabs.styled';
import { StyledTab } from './Tab.styled';

const Tabs = (props) => {
	const { children, defaultActiveKey } = props;
	const [active, setActive] = useState(defaultActiveKey);

	const renderTabs = children.map((item) => {
		const { title, eventKey, disabled = false } = item.props;

		const handleClick = () => {
			setActive(eventKey);
		};

		return (
			<StyledTab
				href='#'
				key={title}
				disabled={disabled}
				eventKey={eventKey}
				isActive={active === eventKey ? true : false}
				onClick={(eventKey) => handleClick(eventKey)}>
				{title}
			</StyledTab>
		);
	});

	const renderContent = children.map((item) => {
		const { title, eventKey, children, disabled = false } = item.props;
		if (active === eventKey) {
			return children;
		}
	});

	return (
		<>
			<StyledTabs>{renderTabs}</StyledTabs>
			<div>{renderContent}</div>
		</>
	);
};

export default Tabs;
