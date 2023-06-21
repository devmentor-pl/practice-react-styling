import React from "react";
import { StyledBreadCrumb } from "./Breadcrumb.styled";

const Breadcrumb = props => {
	const { children } = props;
	return <StyledBreadCrumb>{children}</StyledBreadCrumb>;
};

export default Breadcrumb;
