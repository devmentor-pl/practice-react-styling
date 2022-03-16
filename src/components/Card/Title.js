import React from 'react';
import PropTypes from 'prop-types';

import Heading from './styled/Heading.styled';

const Title = ({ children }) => {
    return <Heading>{children}</Heading>;
};

Title.propTypes = {
    children: PropTypes.string,
};

export default Title;
