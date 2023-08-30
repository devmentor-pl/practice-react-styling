import React from 'react';
import { StyledBreadcrumbItem, StyledLinkItem } from './BreadcrumbItem.styled';

function BreadcrumbItem({ href, children, active }) {
    return (
        <StyledBreadcrumbItem>
            <StyledLinkItem active={active} href={href}>
                {children}
            </StyledLinkItem>
        </StyledBreadcrumbItem>
    );
}

export default BreadcrumbItem;
