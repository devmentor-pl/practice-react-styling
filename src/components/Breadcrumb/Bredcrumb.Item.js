import React from 'react';
import { StyledLink, StyledItem } from './Breadcrumb.styled';

const BreadcrumbItem = props => {
	return (
		<StyledItem>
			<StyledLink active={props.active} href={props.href}>
				{props.children}
			</StyledLink>
		</StyledItem>
	);
};

export default BreadcrumbItem;
