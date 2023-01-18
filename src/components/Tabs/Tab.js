import React, { useContext } from "react";
import { StyledNavLink } from "./Tabs.styled";
import { MyContext } from "./Tabs";

const Tab = props => {
    const {title, eventKey, disabled = false} = props;
    const {key, change} = useContext(MyContext)
    const handleChange = (value) => {
        if(disabled !== true){
            change(value);
        }
    }
    return ( 
        <StyledNavLink disabled={disabled} onClick={()=>handleChange(eventKey)} active={key === eventKey ? true : false}>{title}</StyledNavLink>
    )
}

export default Tab