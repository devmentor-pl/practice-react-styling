import React, {useState} from 'react';
import StyledTabs from './Tabs.styled'
import Tab from './Tab'

const Tabs = props => {
    const initState = createInitState(props.children)
    const [isActive, setActive] = useState(initState);

    const TabItems = props.children.map((child, index) => {
        const {eventKey} = child.props;
        const active = isActive[eventKey];
        if(active) {
            return <Tab key={index} {...child.props} active={active}></Tab> // Nadal stan komponentu <Tab> nie ulega zmianie zgodnie z funkcją ToggleActiveClass. Po kliknięciu w 'Home' obie zakładki (Home i Profile) otrzymują active: true.
        }
        return <Tab onClick={toggleActiveTabs} key={index} {...child.props}></Tab>

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
            if(key === tabKey) { //jeśli właściwość ze stanu nazywa się tak samo jak kliknięty element
                newState[tabKey] = true; // ustaw state na true
            } else {
                newState[key] = false // jeśli się nie nazywa tak samo, ustaw false
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