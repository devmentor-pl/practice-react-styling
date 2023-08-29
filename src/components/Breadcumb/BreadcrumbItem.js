import React from 'react';
import StyledBreadcrumbItem from './BreadcrumbItem.styled';
import LinkItem from './LinkItem';

function BreadcrumbItem({ href, children, active }) {
    return (
        <StyledBreadcrumbItem active={active}>
            <LinkItem href={href} title={children} />
        </StyledBreadcrumbItem>
    );
}

export default BreadcrumbItem;
