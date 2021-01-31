import React from 'react';

import { StyledTab } from './Tab.styled';


import {onClickContext} from './context'

const {Consumer} = onClickContext;

const Tab = props => {

    return (
        <Consumer> 
            { 
                context => {
                    const {activeKey, setKey} = context;
                    const selected = activeKey === props.eventKey ? true : false
                    const disabled = props.disabled

                return <StyledTab onClick={() => {
                            if(!disabled) setKey(props.eventKey)
                        }}
                        selected={ selected } 
                        disabled={ disabled }>
                            {props.title}
                    </StyledTab> 
                }
            }
        </Consumer>
    );
}

export default Tab;