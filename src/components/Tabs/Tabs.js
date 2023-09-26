import React, { useState } from "react";
import StyledTabs from "./Tabs.styled";
import Tab from "./Tab";

import tabsList from "./tablist";


const Tabs = () => {
    const [activeTab, setActiveTab] = useState('profile')

    const handleClick = (name) => {
        setActiveTab(name)
    }

    const renderTab = tabsList.map(({ id, name, title, disabled }) => {
        return (
            <Tab onClick={(e) => handleClick(name)} active={activeTab === name} key={id} name={name} disabled={disabled}>{title}</Tab>

        )
    })

    const renderText = tabsList.map(item => {
        if (item.name === activeTab) {
            return <p key={item.id}>{item.text}</p>
        }
    })

    return (
        <>
            <nav>
                <StyledTabs>{renderTab}</StyledTabs>
            </nav>

            {renderText}
        </>)
}

export default Tabs