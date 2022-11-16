import React from "react";

import { StyledTab } from './Tab.styled';

const Tab = ({name, disabled, marked }) => {
    return (
        <StyledTab marked = { marked }>
            { !disabled ? <a href = "#">{ name }</a> : <p href = "#">{ name }</p>}
        </StyledTab>
    )
}

export { Tab };