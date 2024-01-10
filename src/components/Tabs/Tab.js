import React from "react";
import { TabButton } from "./Tabs.styled";

const Tab = ({ label, active, children, onClick }) => {
    return (
        <TabButton
            onClick={() => onClick(label)}
            className={active ? "active" : ""}
        >
            {label}
        </TabButton>
    );
};

export default Tab;