import React from 'react'
import styled from 'styled-components'

const StyledCardText = styled.p`
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
margin-top: 0;
margin-bottom: 1rem;
`


const CardText = ({children}) => {
  return (
    <StyledCardText>{children}</StyledCardText>
  )
}

export default CardText