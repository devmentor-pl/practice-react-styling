import React from 'react';

import { StyledAlert } from './styles/Alert';

const Alert = props => {
    const { variant } = props;
    console.log('%cAlert variant: ', 'color:yellowgreen', variant);
    console.log('%cAlert props.children: ', 'color:yellowgreen', props.children);
    return (
        <StyledAlert variant={ variant }>{ props.children }</StyledAlert>
    );
}

export default Alert;