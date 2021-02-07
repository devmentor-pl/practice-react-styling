import React, { useState } from 'react';

import { StyledTabs } from './Tabs.styled';

import {onClickContext} from './context'

const Tabs = props => {
    const { defaultActiveKey } = props;
    const Tabs = props.children;

    const [activeKey, setKey] = useState(defaultActiveKey);

    const getActiveText = () => {
        for(let i=0; i<Tabs.length; i++) {
            const Tab = Tabs[i];
            const tabEventKey = Tab.props.eventKey;
            const TabElement = Tab.props.children
            const tabText = TabElement.props.children

            if(activeKey === tabEventKey) {
                return tabText
            }
        }
    }

    const {Provider} = onClickContext;

    return (
        <>
            <nav>
                <Provider value={ {activeKey, setKey} }>
                    <StyledTabs>{ Tabs }</StyledTabs>
                </Provider>
            </nav>
            <p>
                { getActiveText() }
            </p>
        </>
    );
}

export default Tabs;