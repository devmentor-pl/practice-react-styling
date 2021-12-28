import React from 'react';

const TabContent = (props) => {
    const {text, active} = props;
    return (active ? <p>{text}</p> : null)
}

export {TabContent};