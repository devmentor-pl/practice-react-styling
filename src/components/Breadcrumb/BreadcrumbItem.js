import React from 'react';
import StyledBreadcrumItem from './BreadcrumbItem.styled';

export default function BreadcrumbItem(props) {
	const { href, active } = props;
	const link = <a href={href}>{props.children}</a>;

	return <StyledBreadcrumItem active={active}>{link}</StyledBreadcrumItem>;
}
