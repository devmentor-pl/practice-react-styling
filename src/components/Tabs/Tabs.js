import React, { useState } from 'react';

import Tab from './Tab';
import { StyledTabsNavigation } from './Tabs.styled';
import { StyledTabContent } from './Tab.styled';

function Tabs({ children, defaultActiveKey }) {
    const [activeKeyTab, setActiveKeyTag] = useState(defaultActiveKey);
    const tabsJSX = children.map(({ props }) => {
        const { eventKey, title, disabled } = props;
        const isActive = eventKey === activeKeyTab;
        return (
            <Tab key={title} onClick={() => setActiveKeyTag(eventKey)} disabled={disabled} isActive={isActive}>
                {title}
            </Tab>
        );
    });

    const contentJSX = children.map((child, index) => {
        const isActive = activeKeyTab === child.props.eventKey;
        return (
            <StyledTabContent key={index} isActive={isActive}>
                {child.props.children}
            </StyledTabContent>
        );
    });
    return (
        <section>
            <StyledTabsNavigation>{tabsJSX}</StyledTabsNavigation>
            {contentJSX}
        </section>
    );
}

export default Tabs;
