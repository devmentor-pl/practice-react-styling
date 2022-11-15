import React from 'react';
import StyledBreadcrumItem from './BreadcrumbItem.styled';


function BreadcrumbItem(props) {
    const { href, active } = props;
    const link = <a href={href}>{props.children}</a>;

    return <StyledBreadcrumItem active={active}>{link}</StyledBreadcrumItem>;
}

export default BreadcrumbItem;