import React from "react";
import { TabButton } from "./Tabs.styled";

const Tab = ({ label, active, disabled, children, onClick }) => {
    const handleClick = () => {
        if (!disabled) {
            onClick(label);
        }
    };

    return (
        <TabButton
            onClick={handleClick}
            className={`${active ? "active" : ""} ${disabled ? "disabled" : ""}`}
            disabled={disabled}
        >
            {label}
        </TabButton>
    );
};

export default Tab;