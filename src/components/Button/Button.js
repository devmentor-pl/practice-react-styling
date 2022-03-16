import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = props => {
    const { disabled, variant, size, active } = props;
    return (
        <StyledButton disabled={disabled} variant={variant} size={size} active={active}>
            {props.children}
        </StyledButton>
    );
};

Button.propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    variant: PropTypes.string,
};

Button.defaultProps = {
    active: false,
    disabled: false,
    size: 'md',
    variant: 'primary',
};

export default Button;
