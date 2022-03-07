import React from 'react';
import PropTypes from 'prop-types';
import StyledBreadcrumbItem from './BreadcrumbItem.styled';

const BreadcrumbItem = ({ children, href, active }) => {
    return (
        <StyledBreadcrumbItem href={href} active={active}>
            {children}
        </StyledBreadcrumbItem>
    );
};

BreadcrumbItem.propTypes = {
    children: PropTypes.string.isRequired,
    href: PropTypes.string,
    active: PropTypes.bool,
};

BreadcrumbItem.defaultProps = {
    href: '#',
    active: false,
};

export default BreadcrumbItem;
