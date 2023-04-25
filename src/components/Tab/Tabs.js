import React, { useState } from 'react';
import Tab from './Tab';
import StyledTabs from './Tabs.styled';
import StyledTab from './Tab.styled';

const Tabs = props => {
    const {children} = props;
    const [activeTab, setActiveTab] = useState("");

    const renderTabs = () => {
        return children.map(item => {
            const {eventKey, title, disabled} = item.props;

            return (
                <StyledTab
                    key={title}
                    href="#"
                    active={eventKey === activeTab}
                    disabled={disabled}
                    onClick={()=>setActiveTab(eventKey)}>
                    {title}
                </StyledTab>
            )
        });
    }

    const renderContent = () => {
        return children.filter(item => {
            const { eventKey } = item.props;
            return eventKey === activeTab
        })
    }

    return (
        <>
            <StyledTabs>
                {renderTabs()}
            </StyledTabs>
            <div>
                {renderContent()}
            </div>
        </>
    )
}

export default Tabs;