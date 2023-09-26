import React from "react";
import StyledTab from "./Tab.styled";

const Tab = ({ onClick, title, name, active, children, disabled }) => {
    return <StyledTab name={name} active={active} onClick={disabled ? null : onClick} title={title} disabled={disabled}>
        {children}
    </StyledTab>
}

export default Tab