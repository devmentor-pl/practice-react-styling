import React from 'react';
import PropTypes from 'prop-types';

import {StyledBreadcrumbItem} from './BreadcrumbItem.styled';

const BreadcrumbItem = props =>{
    const {children,href,active} = props;
    return (
        <StyledBreadcrumbItem active={active}><a href={href}>{children}</a></StyledBreadcrumbItem>
    )
}

export default BreadcrumbItem;


BreadcrumbItem.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
    active: PropTypes.bool,
}