import React from "react";
import StyledTabItem from "./TabItem.styled";

const TabItem = (props) => {
    return (
        <StyledTabItem
            active={props.active}
            disabled={props.disabled}
            onClick={
                props.disabled === false
                    ? () => props.handleClick(props.label)
                    : undefined
            }
        >
            <a href="#">{props.children}</a>
        </StyledTabItem>
    );
};

export default TabItem;
