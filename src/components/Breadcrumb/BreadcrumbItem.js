import React from 'react';
import { v4 as uuid } from 'uuid';
import { StyledBreadcrumbItem } from './BreadcrumbItem.styled';

const BreadcrumbItem = (props => {
    const {name, href, active} = props.data;
    if (active) {
        return(
            <StyledBreadcrumbItem key={uuid()} active={active}>
                <a href = {href}>{name}</a>
            </StyledBreadcrumbItem>
        )
    } 
    return (<StyledBreadcrumbItem key={uuid()} active={active}>{name}</StyledBreadcrumbItem>
    )
})

export {BreadcrumbItem};