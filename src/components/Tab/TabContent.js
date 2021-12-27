import React from 'react';

const TabContent = (props) => {
    const {text, marked} = props.data;
    return (marked ? <p>{text}</p> : null)
}

export {TabContent};