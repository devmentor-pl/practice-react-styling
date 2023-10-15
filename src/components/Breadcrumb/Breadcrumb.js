import React from 'react';
import { StyledBreadCrumb, StyledNav } from './Breadcrumb.styled';

const Breadcrumb = props => {
	return (
		<StyledNav>
			<StyledBreadCrumb>{props.children}</StyledBreadCrumb>
		</StyledNav>
	);
};

export default Breadcrumb;
