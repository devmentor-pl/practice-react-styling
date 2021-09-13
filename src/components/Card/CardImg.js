import React from 'react';

import { StyledCardImg } from './styles/CardImg';

const CardImg = props => {
    console.log('%cCardImg props: ', 'color:green', props);
    console.log('%cCardImg props.children: ', 'color:green', props.children);
    const { variant, src } = props;
    return <StyledCardImg src={ src }>{ props.children }</StyledCardImg>;
};

export default CardImg;