import React, {useState} from 'react';
import { v4 as uuid } from 'uuid';
import { ThemeProvider } from 'styled-components';
import {StyledTabs} from './Tabs.styled'
import themeSettings from './theme'
import { Tab } from './Tab';
import { TabContent } from './TabContent';
import { StyledTabContent } from './TabContent.styled';

const TabsList = [  
    {name: 'Home', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;', marked: true },
    {name: 'Profile', text: 'Donec dignissim ultricies felis, eu dictum eros congue in. In gravida lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.', marked: false},
    {name: 'Contact', text: 'Donec dignissim ultricies felis, eu dictum eros congue in. In gravida lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.', disabled:  true}
]


const Tabs = () => {
    const handleClick = (e) => {
      e.preventDefault();
    }

    // const [marked, setMarked] = useState();
    return (
        <ThemeProvider theme = {themeSettings}>
            <StyledTabs>
                {TabsList.map((item) =>{
                   const {name, disabled, marked} = item;
                   return  <Tab key= {uuid()} name= {name} disabled= {disabled} marked ={marked} onClick = {(e) => handleClick(e)}/>
                })}
            </StyledTabs>
            <StyledTabContent> 
                {TabsList.map((item) => <TabContent key= {uuid()} data= {item}/>)} 
            </StyledTabContent>
        </ThemeProvider>
    )
}

export default Tabs;