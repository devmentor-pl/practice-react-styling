import React, { useState } from 'react';
import { TabList, TabsContainer, TabContent } from './Tabs.styled';

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (label) => {
        setActiveTab(label);
    };

    return (
        <TabsContainer>
            <TabList>
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    active: child.props.label === activeTab,
                    onClick: handleClick
                })
            )}
            </TabList>
            <TabContent>
                {children.map((child) =>
                    child.props.label === activeTab ? child.props.children : undefined
                )}
            </TabContent>
        </TabsContainer>
    );
};

export default Tabs;