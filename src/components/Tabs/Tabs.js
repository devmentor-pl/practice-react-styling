import React, { useState } from "react";
import {TabsItem} from './Tabs.styled'
import Tab from './Tab'
import Content from './ContentBox'



const Tabs = props => {



  const date = [
    { id: 0, title: "bread", content: "lorem ipsum" },
    { id: 1, title: "milk", content: "lrgrt" },
    { id: 2, title: "water", content: "lorrthtem ipsum" }
  ];


    const [active, setActive] = useState(0);

    const handleClick = e => {
      const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    };


    return (


      <nav>
        <TabsItem>

            <Tab
            onClick={handleClick}
            active={active===0}
            id={date[0].id}
            title={date[0].title}
            />

      
            <Tab
            onClick={handleClick}
            active={active===1}
            id={date[1].id}
            title={date[1].title}
            />
            
        
            <Tab
            onClick={handleClick}
            active={active===2}
            id={date[2].id}
            title={date[2].title}
            disabled
            />

        </TabsItem>
          
       

        <>
          <Content
          content={date[0].content}
          active={active === 0}
          
          />
          <Content
          content={date[1].content}
          active={active === 1}
          />
          <Content
          content={date[2].content}
          active={active === 2}
          />
        </>
       


      </nav>
      //   <nav>
      //   <TabsItem>
      //       <TabItem  onClick={handleClick} active={active === 0} id={0}>
      //      Home
      //       </TabItem>
      //       <TabItem onClick={handleClick} active={active === 1} id={1}>
      //    Profile
      //       </TabItem>
      //       <TabItem disabled onClick={handleClick} active={active === 2} id={2}>
      //   Contact
      //       </TabItem>
      //  </TabsItem>
     
      //   <>
      //     <Content active={active === 0}>
      //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus.</p>
      //     </Content>
      //     <Content active={active === 1}>
      //       <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      //     </Content>
      //     <Content active={active === 2}>
      //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus.</p>
      //     </Content>
      //   </>
     
      // </nav>
        
        
       
    )
}

export default Tabs