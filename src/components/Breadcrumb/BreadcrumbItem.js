import React from 'react';

import { StyledBreadcrumbItem } from './styles/BreadcrumbItem';

const BreadcrumbItem = props => {
    const { href, active } = props;
    console.log('%cBreadcrumbItem href, active: ', 'color:yellow', href, active);
    return (
        <StyledBreadcrumbItem active={ active }>
            <a href={ href }>{ props.children }</a>
        </StyledBreadcrumbItem>
    );
};

export default BreadcrumbItem;