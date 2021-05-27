import React from 'react';
import StyledBreadcrumbItem from './BreadcrumbItem.styled';



const BreadcrumbItem = ({href, active, ...props}) => {


    return (
        <StyledBreadcrumbItem>
            {href && !active ? <a href={href}>{props.children}</a>: props.children}
        </StyledBreadcrumbItem>
    )
    
    
}


export default BreadcrumbItem;