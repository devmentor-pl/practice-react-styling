import React from 'react';

import StyledBreadcrumbItem from './BreadcrumbItem.styled';

const BreadcrumbItem = props => {
    return (
        <StyledBreadcrumbItem active={props.active}>
            {props.href ? <a href={props.href}>{props.children}</a> : props.children}
        </StyledBreadcrumbItem>
    );
}

export default BreadcrumbItem;