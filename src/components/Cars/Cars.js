import React, { Component } from 'react'
import Button from '../Button';
class Cars extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h2>Cars</h2>
                <img src="https://picsum.photos/100/80" alt="img" />
                <div>Card Title</div>
                <div>Some quick example text to build on the card title and make up the bulk of the card's content.</div>
                <Button variant='primary' size='sm'>Go somewhere</Button>{' '}
            </div>
        );
    }
}
 
export default Cars;