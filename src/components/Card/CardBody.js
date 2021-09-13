import React from 'react';
import { StyledCardBody } from './styles/CardBody';

const CardBody = props => {
    console.log('%cCardBody props: ', 'color:green', props);
    console.log('%cCardBody props.children: ', 'color:green', props.children);
    return <StyledCardBody>{ props.children }</StyledCardBody>;
};

export default CardBody;