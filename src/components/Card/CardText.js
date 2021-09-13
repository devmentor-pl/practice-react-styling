import React from 'react';

import { StyledCardText } from './styles/CardText';

const CardText = props => {
    console.log('%cCardText props: ', 'color:green', props);
    console.log('%cCardText props.children: ', 'color:green', props.children);
    return <StyledCardText>{ props.children }</StyledCardText>;
};

export default CardText;