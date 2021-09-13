import React from 'react';

import { StyledButton } from './styles/Button';

const Button = props => {
    const { variant, size, disabled, active } = props;
    console.log('%cButton variant, size, disabled, active: ', 'color:orange', variant, size, disabled, active);
    return (
        <StyledButton
            variant={ variant }
            size={ size }
            disabled={ disabled }
            active={ active }
        >
        { props.children }
    </StyledButton>
  );
};

export default Button;