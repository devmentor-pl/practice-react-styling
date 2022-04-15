import React from 'react';

import { StyledAlert } from './Alert.styled';

const Alert = props => {
    const {type} = props;
    return (
        <>
            <StyledAlert type={type}>{props.children}</StyledAlert>
        </>
    );
}

export default Alert;