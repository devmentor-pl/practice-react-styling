import React, { useState } from "react";

import { StyledTabs, StyledTabsChild, StyledTabsLinkActive } from "./StyledTabs";



const Tabs = props => {

    const [state, setState] = useState(props.defaultActiveKey)

  function handleClick(key){
    setState(key)
  }
    return(
        <>
        <StyledTabs>{React.Children.map(props.children, (child) => <StyledTabsLinkActive active = {child.props.eventKey === state} onClick={() => handleClick(child.props.eventKey)}>{child.props.title}</StyledTabsLinkActive>)}
    
        </StyledTabs>

        {React.Children.map(props.children, (child) => <StyledTabsChild active = {child.props.eventKey === state}>{child}</StyledTabsChild>)}
        </>
        )
}

export default Tabs