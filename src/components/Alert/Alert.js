import React from 'react';
import PropTypes from 'prop-types';

import { StyledAlert } from './Alert.styled';

const Alert = props => {
    const {variant} = props;
    return (
        <StyledAlert variant={variant}>{props.children}</StyledAlert>
    );
}

export default Alert;

Alert.propTypes = {
    variant:PropTypes.string
}