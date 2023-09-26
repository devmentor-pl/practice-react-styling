import React from 'react';
import { StyledBreadcrumbItem, StyledLink } from './BreadcrumbItem.styled';

const BreadcrumbItem = ({ href, children, active }) => {
	return (
		<StyledBreadcrumbItem>
			<StyledLink href={href} className={active ? 'active' : ''}>
				{children}
			</StyledLink>
		</StyledBreadcrumbItem>
	);
};

export default BreadcrumbItem;
