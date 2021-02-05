import React, { useState } from "react";
import Tab from "./Tab";
import StyledTabs from "./Tabs.styled";

const Tabs = (props) => {
	const initializeState = (tabs) => {
		const initObj = {};
		tabs.forEach(({ props }) => {
			if (props.active) {
				initObj[props.eventKey] = props.active ? true : false;
			}
		});
		return initObj;
	};

	const init = initializeState(props.children);
	const [activeTab, setActiveTab] = useState(init);

	const handleTabChange = (targetTab) => {
		const newState = { [targetTab]: true };
		setActiveTab(newState);
	};

	const tabList = props.children.map((tab, index) => {
		const {
			props: { title, eventKey, active, disabled },
		} = tab;
		return (
			<Tab
				key={index}
				handleTabChange={handleTabChange}
				active={active}
				eventKey={eventKey}
				title={title}
				disabled={disabled}
			></Tab>
		);
	});

	const renderTabContent = () => {
        // tutaj jest PROBLEM z propsami bo muszę się przebijać przez wszsytko
		return props.children.map((child, index) => {
            const { props: { eventKey, children } } = child;
            const { props } = children;
			for (let key in activeTab) {
				if (key === eventKey) {
					return <div key={index}>{props.children}</div>;
				}
			}
		});
	};

	return (
        <>
            <StyledTabs>
                {tabList}
            </StyledTabs>
            {renderTabContent()}
        </>
	);
};

export default Tabs;
