import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ children }) => {
    return <div>{children}</div>;
};

Tab.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Tab;
