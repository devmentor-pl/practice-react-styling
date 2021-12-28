import React from 'react';

import { StyledTab } from './Tab.styled';

const Tab = ({name, disabled, active}) => {

    return (
        <StyledTab active ={active}> 
         { !disabled ? <a href ="#" name={name}>{name}</a> : <p href ="#">{name}</p>}
        </StyledTab>
    )
}

export {Tab};