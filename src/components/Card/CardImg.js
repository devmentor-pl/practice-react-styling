import React from "react";
import { StyledImg } from "./CardImg.styled";

const CardImg = props => {
	const { src } = props;

	return <StyledImg src={src} />;
};

export default CardImg;
