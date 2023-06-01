import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themeSettings from './theme';
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
		const { eventKey, children } = item.props;
		if (active === eventKey) {
			return children;
		}
	});

	return (
		<ThemeProvider theme={themeSettings}>
			<StyledTabs>{renderTabs}</StyledTabs>
			<div>{renderContent}</div>
		</ThemeProvider>
	);
};

export default Tabs;
