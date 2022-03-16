import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children }) => {
    return <p>{children}</p>;
};

Text.proptypes = {
    children: PropTypes.string,
};

export default Text;
