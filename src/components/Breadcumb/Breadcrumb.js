import React from 'react';

import { StyledBreadcrumb } from './Breadcrumb.styled';

function Breadcrumb({ children }) {
    return <StyledBreadcrumb>{children}</StyledBreadcrumb>;
}

export default Breadcrumb;
