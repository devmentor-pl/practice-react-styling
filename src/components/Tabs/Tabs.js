import React, {useState} from 'react';

import { StyledNav,StyledSpan } from './Tabs.styled';


const Tabs = props => {
    const {children,defaultActiveKey} = props;
    const childList =  children.map((child) => child.props)

    const [activeTab,setActiveTab] = useState(defaultActiveKey);

    function renderTitle(){
        return childList.map((child) => {
            return <StyledSpan 
                href="#"
                key={child.eventKey}
                active={activeTab === child.eventKey}
                disabled={child.disabled}
                onClick={()=>setActiveTab(child.eventKey)}>
                    {child.title}
                </StyledSpan>
        })
    }
    function renderContent(activeTab){
         return children.map((child) => {
            if(child.props.eventKey === activeTab){
                return child;
            }
        })
    }

    console.log(activeTab)
    return (
        <>
        <StyledNav>
           {renderTitle()}
        </StyledNav>
        <div>
            {renderContent(activeTab)}
        </div>
        </>
    )
}

export default Tabs;