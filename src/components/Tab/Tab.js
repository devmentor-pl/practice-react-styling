import React from "react";
import { StyledTab } from "./StyledTab";

const Tab = props => {
    return(
        <StyledTab>{props.children}</StyledTab>
    )
} 

export default Tab