import React from "react";

import { StyledCardTitle } from "./CardTitle.styled";

const CardTitle = (props) => {
    return(
         <StyledCardTitle>
        <h5>{props.children}</h5>
        </StyledCardTitle>
    );
};

export default CardTitle;