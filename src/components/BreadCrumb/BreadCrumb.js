import React from "react";
import { StyledBreadCrumb } from "./Breadcrumb.styled";

const BreadCrumb = props => {
	const { children } = props;
	return (
		<nav>
			<StyledBreadCrumb>{children}</StyledBreadCrumb>
		</nav>
	);
};

export default BreadCrumb;
