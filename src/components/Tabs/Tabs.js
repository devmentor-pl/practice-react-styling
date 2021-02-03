import React, { useState } from "react";
import { Content, TabsItem, TabItem}  from './Tabs.styled'



const Tabs = ( ) => {

  const [active, setActive] = useState(0);


  const handleClick = e => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };



  const data = [
    { id: 0, title: "Home", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 1, title: "Profile", content: "Ut enim ad minim veniam, quis nostrud exercitation"},
    { id: 2, title: "Contact", content: "Sed ut perspiciatis unde omnis iste natus error", disabled: "disabled" }
  ];

    function renderTab() {
    return  data.map(item => {
        return (
          <TabItem
          onClick={handleClick}
          active={active === item.id}
          id={item.id}
          title={item.title}
          key={item.id}
          disabled={item.disabled}>
            {item.title}
          </TabItem>
  
        )
      })
    }


    function renderContentForTab() {
    return  data.map(item => {
        return (
          <Content
          active={active === item.id}
          content={item.content}>
          {item.content}
          </Content>
          
        )
      })
    }


    return (
      <nav>
        <TabsItem>
            {renderTab()}
        </TabsItem>

        <>
         <p> {renderContentForTab()} </p>
        </>
       
      </nav>
      
    )
}

export default Tabs