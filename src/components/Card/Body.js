import React from "react";
import StyledBody from "./StyledElements/StyledBody";

const Body = ({children}) => {
    return (
        <StyledBody>
            
        {children}
        </StyledBody>
    )
}

export default Body;