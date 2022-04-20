import React from 'react';
import PropTypes from 'prop-types';
import { StyledCardTitle } from './Card.styled';

const CardTitle = ({children}) => {
    return (
       <StyledCardTitle><h5>{children}</h5></StyledCardTitle>
    )
}

export default CardTitle;

CardTitle.propTypes = {
    children: PropTypes.string
}