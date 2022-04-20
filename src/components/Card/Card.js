import React from 'react';
import PropTypes from 'prop-types';
import { StyledCardDiv, StyledCardImg, StyledCardBody } from './Card.styled';

const Card = (props) =>{
    const {children} = props;
    const [,bodyComponent] = children;

    const imgSrc = React.Children.map(
        children, child => child.props.src
    )

    const bodyComponentChildren = React.Children.map(
        bodyComponent, child => child.props.children
    )

    return(
        <StyledCardDiv>
            <StyledCardImg src={imgSrc}></StyledCardImg>
            <StyledCardBody>{bodyComponentChildren}</StyledCardBody>
        </StyledCardDiv>
    )
}

export default Card;

Card.propTypes = {
    children: PropTypes.node.isRequired,
}
