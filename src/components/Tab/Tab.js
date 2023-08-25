import React from "react";

import { StyledTab } from './Tab.styled'
import { IsActiveContext } from "../../context/IsActiveContext";

const Tab = (props) => {
  const {
    isActive,
    handleSetIsActive
  } = React.useContext(IsActiveContext)

  return (
    <StyledTab
      isActive={isActive === props.index}
      onClick={() => handleSetIsActive(props.index)}
      href={'#'}
      disabled={props.disabled}
    >
      {props.title}
    </StyledTab>
  )
}

export default Tab