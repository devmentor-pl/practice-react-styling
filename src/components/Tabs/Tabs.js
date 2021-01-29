import React, { useState } from "react";
import { Content, TabsItem, TabItem}  from './Tabs.styled'



const Tabs = props => {
    const [active, setActive] = useState(0);


    const handleClick = e => {
      const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };


    return (
        <div>
        <TabsItem>
            <TabItem  onClick={handleClick} active={active === 0} id={0}>
           Home
            </TabItem>
            <TabItem onClick={handleClick} active={active === 1} id={1}>
         Profile
            </TabItem>
            <TabItem disabled onClick={handleClick} active={active === 2} id={2}>
        Contact
            </TabItem>
       </TabsItem>
     
        <>
          <Content active={active === 0}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus.</p>
          </Content>
          <Content active={active === 1}>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </Content>
          <Content active={active === 2}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus.</p>
          </Content>
        </>
     
      </div>
        
        
       
    )
}

export default Tabs