import React from 'react';
import StyledBreadcrumbItem from './BreadcrumbItem.styled';

const BreadcrumbItem = ({ href, active, children}) => {
    return (
        <StyledBreadcrumbItem active={ active }>
            <a href={ href }>{ children }</a>
        </StyledBreadcrumbItem>
    )
};

export default BreadcrumbItem;