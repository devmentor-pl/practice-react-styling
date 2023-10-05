import React from 'react';
import StyledBreadcrumb from './Breadcrumb.styled';

const Breadcrumb = ({children}) => {
    return (
        <StyledBreadcrumb>{children}</StyledBreadcrumb>
    );
}

export default Breadcrumb