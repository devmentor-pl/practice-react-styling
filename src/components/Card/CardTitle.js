import React from "react";
import { StyledTitle } from "./CardTitle.styled";

const CardTitle = props => {
	const { children } = props;

	return <StyledTitle>{children}</StyledTitle>;
};

export default CardTitle;
