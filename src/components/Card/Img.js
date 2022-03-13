import React from 'react';
import PropTypes from 'prop-types';

import StyledImage from './styled/Img.styled';

const Img = ({ src = '#' }) => {
    return <StyledImage src={src}></StyledImage>;
};

Img.propTypes = {
    src: PropTypes.string,
};

export default Img;
