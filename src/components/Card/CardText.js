import React from "react";
import { StyledText } from "./CardText.styled";

const CardText = props => {
	const { children } = props;

	return <StyledText>{children}</StyledText>;
};

export default CardText;
