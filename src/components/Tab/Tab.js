import React, { useContext } from "react";
import { StyledTab } from "./Tab.styled";
import { keyContext, keyChangeContext } from "../Tabs/keyContext";

const Tab = (props) => {
  const actualKey = useContext(keyContext);
  const handleClick = useContext(keyChangeContext);

  const { eventKey, disabled, title } = props;
  return (
    <>
      <StyledTab
        eventKey={eventKey}
        actualKey={actualKey}
        onClick={!disabled ? () => handleClick(eventKey) : null}
        disabled={disabled}
      >
        {title}
      </StyledTab>
    </>
  );
};

export default Tab;
