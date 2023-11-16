import React from 'react';
import { StyledTab } from './Tab.styled';

const Tab = props => {
    
    const {eventKey, onClick, disabled, active, href, title} = props;

    if(disabled) {
        return <StyledTab title={title} eventKey={eventKey} disabled={disabled} active={active}>{title}</StyledTab>
    }
    
    return (
        <StyledTab href={href} title={title} eventKey={eventKey} onClick={onClick} disabled={disabled} active={active}>{title}</StyledTab> 
    );
}

export {Tab};

