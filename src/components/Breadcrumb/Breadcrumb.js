import React from "react";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = ({children}) => {
    const style = {display: 'flex'}
    return (
        <nav><ul style={style}>{children}</ul></nav>
    )
}

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;