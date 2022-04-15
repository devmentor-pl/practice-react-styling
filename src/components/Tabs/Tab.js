import React from 'react';
import StyledTab from './Tab.styled'

const Tab = props => {
    const {eventKey, title, disabled, active, onClick} = props;
    console.log(eventKey + ' => przycisk jest aktywny: ' + active)
    return (
        <StyledTab onClick={e => onClick(e.target.dataset.eventKey)} data-event-key={eventKey} href='#' disabled={disabled} active={active}>{title}</StyledTab>
    )
}

export default Tab