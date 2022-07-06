import React, {useState} from 'react';
import { StyledTabs } from './Tabs.styled';
import {Tab} from './Tab';
import { TabList } from './TabList';
import { TabContent } from './TabContent';

const Tabs = ()=> {

    const [activeTab, setActiveTab] = useState('home')

    const clickHandler= item => {
        setActiveTab(item.eventKey)
    }
    
    return (
        <>
            <StyledTabs >
                {TabList.map((item) => 
                <Tab onClick= {() => clickHandler(item)} title={item.title} eventKey={item.eventKey} 
                href={item.href} active={item.eventKey === activeTab} disabled={item.disabled}/>)}
            </StyledTabs>
            {TabList.map((item) => <TabContent paragraph={item.paragraph} active={item.eventKey === activeTab}/>)}
        </>
    );
}



export default Tabs;