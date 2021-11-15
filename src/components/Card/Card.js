import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: ${ ({ width }) => width };
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
`

const Card = ({ style, children }) => (
    <StyledCard style={ style }>
        { children }
    </StyledCard>
)

export default Card;