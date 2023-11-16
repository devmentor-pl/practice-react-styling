import React, { Component } from 'react'
import Button from '../Button';
import styled from 'styled-components';

const Wrapper = styled.div` 
    width: 18rem;
`
const Card = styled.div` 
    border: 1px solid #dee2e6;
    padding: 1.25rem;
`
const Img = styled.img`
    width: 100%;
`
const Title = styled.div` 
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
`
const Body = styled.div` 
    margin-bottom: 1rem;
`
class Cars extends Component {
    state = {}
    render() {
        return (
            <Wrapper>
                <Img src="https://picsum.photos/100/80" alt="img" />
                <Card>
                    <Title>Card Title</Title>
                    <Body>Some quick example text to build on the card title and make up the bulk of the card's content.</Body>
                    <Button variant='primary' size='sm'>Go somewhere</Button>{' '}
                </Card>
                <br />
            </Wrapper>
        );
    }
}

export default Cars;