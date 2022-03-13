import React, { useCallback } from 'react';

import Img from './Img';
import Title from './Title';
import Text from './Text';

import StyledCard from './styled/Card.styled';
import Body from './styled/Body.styled';

const Card = ({ children }) => {
    const renderImg = useCallback(() => children.find(({ type }) => type === Img), [Img]);

    const renderBody = useCallback(() => children.filter(({ type }) => type !== Img), [Title, Text]);

    return (
        <StyledCard>
            <>{renderImg()}</>
            <Body>{renderBody()}</Body>
        </StyledCard>
    );
};

export default Object.assign(Card, {
    Img: Img,
    Title: Title,
    Text: Text,
});
