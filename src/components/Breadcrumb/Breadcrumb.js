import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem';
import StyledBreadcrumb from './Breadcrumb.styled';

const Breadcrumb = ({ children }) => {
    const renderChildren = useCallback(() => {
        return React.Children.map(children, child => <li>{child}</li>);
    }, [children]);

    return <StyledBreadcrumb>{renderChildren()}</StyledBreadcrumb>;
};

Breadcrumb.propTypes = {
    children: PropTypes.arrayOf(Object),
};

Breadcrumb.defaultProps = {
    children: [],
};

export default Object.assign(Breadcrumb, {
    Item: BreadcrumbItem,
});
