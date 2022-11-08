import React, { useState } from "react";
import StyledTab from "./Tab.styled";

const Tab = (props) => {
	const { handleTabChange, active, eventKey, title, disabled } = props;
	return (
		<StyledTab href={'#'} onClick={() => handleTabChange(eventKey)} active={active} disabled={disabled}>
			{title}
		</StyledTab>
	);
};

export default Tab;
