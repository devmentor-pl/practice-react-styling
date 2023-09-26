import React from 'react';

import { StyledTab } from './Tab.styled';

function Tab({ onClick, disabled, children, isActive }) {
    return (
        <StyledTab onClick={onClick} disabled={disabled} isActive={isActive}>
            {children}
        </StyledTab>
    );
}

export default Tab;
