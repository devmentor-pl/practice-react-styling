import React, {useState} from 'react';
import StyledTabs from './Tabs.styled'
import Tab from './Tab'

const Tabs = props => {
    const initState = createInitState(props.children)
    const [isActive, setActive] = useState(initState);

    const TabItems = props.children.map((child, index) => {
        const {eventKey} = child.props;
        const active = isActive[eventKey];
        return <Tab onClick={toggleActiveTabs} key={index} {...child.props} active={active} ></Tab>
    })

    function createInitState(tabs) {
        const stateObj = {};
        tabs.forEach(tab => {
            stateObj[tab.props.eventKey] = tab.props.active ? true : false
        })
        return stateObj
    }

    function toggleActiveTabs(tabKey) {
        const newState = {}
        for(const key in isActive) {
            if(key === tabKey) {
                newState[tabKey] = true;
            } else {
                newState[key] = false
            }
        }
        setActive(newState)
    }

    const tabItemsContent = props.children.map((item, index) => {
        return (
            isActive[item.props.eventKey] ? 
                <div key={index}>{item.props.children}</div> : null
        )
    })
    return (
        <StyledTabs>
        <nav>{TabItems}</nav>
        <div>{tabItemsContent}</div>
        </StyledTabs>
    )
}

export default Tabs