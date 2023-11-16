import React from "react";
import * as Styled from './Breadcrumb.styled';

const BreadcrumbItem = ({ children, href, active }) => {
    return (
        <Styled.BreadcrumbItem>
            <Styled.BreadcrumbLink href={href} active={active}>{children}</Styled.BreadcrumbLink>
        </Styled.BreadcrumbItem>
    )
}

export default BreadcrumbItem;