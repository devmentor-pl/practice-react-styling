import React from 'react';
import PropTypes from 'prop-types';

import {StyledButton} from './Button.styled';

const Button = props => {
    const {variant, size, active, disabled, children} = props;
    return (
        <StyledButton variant={variant} size={size} active={active} disabled={disabled}>{children} </StyledButton>
    )
}

export default Button;

Button.propTypes = {
    variant:PropTypes.string,
    size:PropTypes.string,
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
}