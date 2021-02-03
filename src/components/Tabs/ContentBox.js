import React from "react";
import {StyledContent}  from './Tabs.styled'

const Content = ({content, active}) => {
    return <StyledContent active={active}>

        <p> {content} </p>
    </StyledContent>
}

export default Content;