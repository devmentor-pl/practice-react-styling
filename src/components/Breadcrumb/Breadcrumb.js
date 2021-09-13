import React from 'react';

import BreadcrumbItem from './BreadcrumbItem';

import { StyledBreadcrumb } from './styles/Breadcrumb';

const Breadcrumb = props => {
    console.log('%cBreadcrumb props.children: ', 'color:yellow', props.children);
    return <StyledBreadcrumb>{ props.children }</StyledBreadcrumb>;
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;