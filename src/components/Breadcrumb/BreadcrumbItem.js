import React from 'react';
import StyledBreadcrumbItem from './BreadcrumbItem.styled';

const BreadcrumbItem = props => {
    const {href, active} = props
    const link = (<a testattr href={href}>{props.children}</a>)
    return (
        <StyledBreadcrumbItem href={href} active={active}>
            {href && !active ? link : props.children}
        </StyledBreadcrumbItem>
    )
}

export default BreadcrumbItem