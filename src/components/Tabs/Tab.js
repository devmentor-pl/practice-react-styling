import React from 'react';
import StyledTab from './Tab.styled'

const Tab = props => {
    const {eventKey, title, disabled, active} = props;
    return (
        <StyledTab data-event-key={eventKey} href='#' disabled={disabled} active={active}>{title}</StyledTab>
    )
}

export default Tab