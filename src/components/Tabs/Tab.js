import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
    const {children} = props;
    return (
        <>
        {children}
        </>
    )
}

export default Tab;

Tab.propTypes = {
    children: PropTypes.node.isRequired,
}