import React from 'react';

import { StyledCardTitle } from './styles/CardTitle';

const CardTitle = props => {
    console.log('%cCardTitle props: ', 'color:green', props);
    console.log('%cCardTitle props.children: ', 'color:green', props.children);
    return (
        <StyledCardTitle>
            <h5>{ props.children }</h5>
        </StyledCardTitle>
    );
};

export default CardTitle;