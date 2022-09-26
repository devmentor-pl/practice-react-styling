import React from 'react';

import { StyledBreadcrumb } from './Breadcrumb.styled';

const Breadcrumb = props => {

    return (
        <nav>
            <StyledBreadcrumb>{props.children}</StyledBreadcrumb>
        </nav>
    );
}

export default Breadcrumb;