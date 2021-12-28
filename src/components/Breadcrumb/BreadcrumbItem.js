import React from 'react';

import { StyledBreadcrumbItem } from './BreadcrumbItem.styled';

const BreadcrumbItem = (props => {
    const {name, href, active} = props.data;
    if (active) {
        return(
            <StyledBreadcrumbItem active={active}>
                <a href = {href}>{name}</a>
            </StyledBreadcrumbItem>
        )
    } 
    return (<StyledBreadcrumbItem active={active}>{name}</StyledBreadcrumbItem>
    )
})

export {BreadcrumbItem};