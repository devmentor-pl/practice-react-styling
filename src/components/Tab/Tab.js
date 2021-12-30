import React from 'react';

import { StyledTab } from './Tab.styled';

const Tab = ({name, disabled, active, onClick}) => {

    return (
        <StyledTab active ={active}> 
         { !disabled ? <a onClick = {onClick} href ="#" name={name}>{name}</a> : <p href ="#">{name}</p>}
        </StyledTab>
    )
}

export {Tab};