import React from "react";
import { StyledBreadCrumbItem } from "./BreadCrumbItem.styled";

const BreadCrumbItem = props => {
	const { children, href = "#", active = false } = props;
	return (
		<StyledBreadCrumbItem active={active}>
			<a href={href}>{children}</a>
		</StyledBreadCrumbItem>
	);
};

export default BreadCrumbItem;
