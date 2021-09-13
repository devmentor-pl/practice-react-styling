import React, {useState} from 'react';

import TabsNav from './TabNav.styled';
import TabItem from './TabItem.styled';

const Tabs = (props) => {
	const [activeTab, setActiveTab] = useState(props.defaultActiveKey);

	const getTabs = () => {
		return (
			props.children.map((tab, index) => {
				const {title, eventKey, disabled} = tab.props;
				return(
					<TabItem
						key= {index}
						href="#"
						activeKey={activeTab}
						active={eventKey === activeTab}
						disabled={disabled}
						onClick={(e) => setActiveTab(eventKey)}
					>
						{title}
					</TabItem>
				);
			})
		);
	};

	const getCurrentContent = () => {
		return props.children.filter(tab => {
			const { eventKey } = tab.props;

			return eventKey === activeTab;
		});
	};

	return(
		<>
			<TabsNav>{getTabs()}</TabsNav>
			<div>{getCurrentContent()}</div>
		</>
	);
}

export default Tabs; 