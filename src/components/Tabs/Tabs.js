import React, { useState } from 'react';
import tabsData from './tabsData';
import Tab from './Tab';
import StyledTabs from './Tabs.styled';

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(tabsData[0].name);

	return (
		<StyledTabs>
			<div className="tab-buttons">
				{tabsData.map((tab) => (
					<button
						key={tab.id}
						disabled={tab.disabled}
						onClick={() => setActiveTab(tab.name)}
						className={tab.name === activeTab ? 'active' : ''}
					>
						{tab.title}
					</button>
				))}
			</div>
			<div className="tab-content">
				{tabsData.map((tab) => (
					<Tab
						key={tab.id}
						active={tab.name === activeTab}
						content={tab.text}
					/>
				))}
			</div>
		</StyledTabs>
	);
};

export default Tabs;
