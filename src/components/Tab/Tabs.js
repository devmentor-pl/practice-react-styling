import React from "react";
import StyledTabs from "./Tabs.styled";
import TabItem from "./TabItem";

const Tabs = (props) => {
    return (
        <StyledTabs>
            {props.tabs.map((tab) => (
                <TabItem
                    key={tab.label}
                    label={tab.label}
                    active={tab.active}
                    disabled={tab.disabled}
                    handleClick={props.handleClick}
                >
                    {tab.label}
                </TabItem>
            ))}
        </StyledTabs>
    );
};

export default Tabs;
