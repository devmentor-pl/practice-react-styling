import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import { ThemeProvider } from 'styled-components';
import {StyledTabs} from './Tabs.styled'
import themeSettings from './theme'
import { Tab } from './Tab';
import { TabContent } from './TabContent';

const TabsList = [  
    {name: 'Home', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;', key: `${uuid()}`},
    {name: 'Profile', text: 'Donec dignissim ultricies felis, eu dictum eros congue in. In gravida lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.', key: `${uuid()}`},
    {name: 'Contact', text: 'Donec dignissim ultricies felis, eu dictum eros congue in. In gravida lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.', key: `${uuid()}`, disabled:  true}
]
const defaultActive = 'Home';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(defaultActive);

    const handleClick = (item) => {
        setActiveTab(item.name);
    }

    return (
        <ThemeProvider theme = {themeSettings}>
            <StyledTabs>
                {TabsList.map((item) =>{
                   const {name, disabled, key} = item;
                   return  <Tab onClick = {() => handleClick(item)} key= {key} name= {name} disabled= {disabled} active = {name===activeTab}/>
                })}
            </StyledTabs>
            {TabsList.map((item) => {
                const {text, name, key} = item;
                return <TabContent key= {key} text= {text} active = {name===activeTab}/>
            })} 
        </ThemeProvider>
    )
}

export default Tabs;