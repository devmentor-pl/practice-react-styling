import React from 'react';
import PropTypes from 'prop-types';

import {StyledBreadcrumb} from './Breadcrumb.styled';

const Breadcrumb = props => {
    const {children} = props;
    return(
        <nav>
            <StyledBreadcrumb>{children}</StyledBreadcrumb>
        </nav>
    )
}

export default Breadcrumb;

Breadcrumb.propTypes = {
    children: PropTypes.node.isRequired,
}