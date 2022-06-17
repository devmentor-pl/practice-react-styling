import React from 'react';

import { StyledAlert } from './Alert.styled';

const Alert = props => {
    return <StyledAlert>{props.children}</StyledAlert>;
}

export default Alert;