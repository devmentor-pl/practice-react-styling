import React from 'react';

import StyledBreadcrumb from './Breadcrumb.styled';

const Breadcrumb = ({variant, children}) => {
    return (
        <StyledBreadcrumb variant={variant}>{children}</StyledBreadcrumb>
    );
}

export default Breadcrumb;