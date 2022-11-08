import React from "react";
import StyledBreadcrumbItem from "./BreadcrumbItem.styled";

const BreadcrumbItem = (props) => {
	const { href, active } = props;
	const itemLink = <a href={href}>{props.children}</a>;
	return (
		<StyledBreadcrumbItem active={active}>
			{href && !active ? itemLink : props.children}
		</StyledBreadcrumbItem>
	);
};

export default BreadcrumbItem;
