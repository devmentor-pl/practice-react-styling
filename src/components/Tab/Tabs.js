import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import { ThemeProvider } from 'styled-components';
import {StyledTabs} from './Tabs.styled'
import themeSettings from './theme'
import { Tab } from './Tab';
import { TabContent } from './TabContent';

const TabsList = [  
    {name: 'Home', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'},
    {name: 'Profile', text: 'Donec dignissim ultricies felis, eu dictum eros congue in. In gravida lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.'},
    {name: 'Contact', text: 'Donec dignissim ultricies felis, eu dictum eros congue in. In gravida lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.', disabled:  true}
]
const defaultActive = 'Home';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(defaultActive);

    const handleClick = (e) => {
        e.preventDefault();
        if(e.target.tagName === 'A') {
            setActiveTab(e.target.name);
        }
    }
    return (
        <ThemeProvider theme = {themeSettings}>
            <StyledTabs onClick = {(e) => handleClick(e)}>
                {TabsList.map((item) =>{
                   const {name, disabled} = item;
                   return  <Tab key= {uuid()} name= {name} disabled= {disabled} active = {name===activeTab}/>
                })}
            </StyledTabs>
            {TabsList.map((item) => {
                const {text, name} = item;
                return <TabContent key= {uuid()} text= {text} active = {name===activeTab}/>
            })} 
        </ThemeProvider>
    )
}

export default Tabs;