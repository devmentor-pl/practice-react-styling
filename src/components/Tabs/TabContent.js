import React from "react";

const TabContent = props => {
    const {paragraph, active} = props

    return (active ? <p>{paragraph}</p> : null)

}

export {TabContent}