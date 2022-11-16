import React from "react";

const TabContent = (props) => {
    const {text, marked} = props;
    return (marked ? <p>{text}</p> : null)
}

export { TabContent };