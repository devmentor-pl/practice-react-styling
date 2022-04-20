import React from 'react';
import PropTypes from 'prop-types';
import {StyledCardText} from './Card.styled';

const CardText = ({children}) => {
    return (
       <StyledCardText>{children}</StyledCardText>
    )
}

export default CardText;

CardText.propTypes = {
    children: PropTypes.string
}