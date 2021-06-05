import React, {useState} from 'react';

import TabsNavStyled from './TabNavStyled';
import TabNavItemStyled from './TabNavItemStyled';

const Tabs = (props) => {
	const [activeTab, setActiveTab] = useState(props.defaultActiveKey);

	const getTabs = () => {
		return (
			props.children.map((tab, index) => {
				const {title, eventKey, disabled} = tab.props;
				return(
					<TabNavItemStyled
						key= {index}
						href="#"
						activeKey={activeTab}
						active={eventKey === activeTab}
						disabled={disabled}
						onClick={(e) => setActiveTab(eventKey)}
					>
						{title}
					</TabNavItemStyled>
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
			<TabsNavStyled>{getTabs()}</TabsNavStyled>
			<div>{getCurrentContent()}</div>
		</>
	);
}

export default Tabs;