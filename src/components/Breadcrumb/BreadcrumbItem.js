import React from 'react';
import { StyledBreadcrumbItem } from './BreadcrumbItem.styled';

const BreadcrumbItem = props => {
    const {href, active, title} = props.data;

    if(active) {
        return <StyledBreadcrumbItem active={active}><a href={href}>{title}</a></StyledBreadcrumbItem>
    }
    
    return (
        <StyledBreadcrumbItem active={active}>{title}</StyledBreadcrumbItem>
    );
}

export {BreadcrumbItem};
