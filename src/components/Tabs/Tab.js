import React from "react";
import {StyledTab} from './Tabs.styled'



const Tab = ({onClick}) => {
   return  <button onClick={onClick}>{title}</button>
}

export default Tab;