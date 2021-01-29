import React from 'react';
import img1 from '../../../assets/img/dog.jpg'
import {StyledImg} from './MainCard.styled'




const CardImg = props => {
    return (
    <StyledImg src={img1} alt='image 1'>
    </StyledImg>
    )

}


export default CardImg