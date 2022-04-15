import React, { useState } from "react";

import { StyledTab } from "./Tab.styled";
import { StyledTabs } from "./Tabs.styled";

const Tabs = props => {
    const [activeTab, setActiveTab] = useState(props.defaultActiveKey || "");

    const createTabs = () => {
        return props.children.map(tabItem => {
            const { title, eventKey, disabled = false } = tabItem.props;

            return(
                <StyledTab
                key={title}
                href="#"
                active={eventKey === activeTab}
                disabled={disabled}
                onClick={ e => setActiveTab(eventKey)}
                >
                    {title}
                </StyledTab>
            )
        })
    };

    const createTabsContent = () => {
        return props.children.filter(tabItem => {
            const { eventKey } = tabItem.props;

            return eventKey === activeTab;
        })
    };

    return (
        <>
        <StyledTabs>{createTabs()}</StyledTabs>
        <div>{createTabsContent()}</div>
        </>
    );
};

export default Tabs;