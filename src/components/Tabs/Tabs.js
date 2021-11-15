import React, { useState } from 'react';
import { NavItem } from './Nav';
import StyledNav from './Nav/StyledNav';

const Tabs = ({ children }) => {
    const [ activeTab, setActiveTab] = useState('');
    const [ currentContent, setCurrentContent ] = useState('');

    const onClick = (e, content, eventKey) => {
        e.preventDefault();
        setActiveTab(eventKey);
        console.log(activeTab)
        setCurrentContent(content);
    }

    const list = children.map(child => {
        const { title, children, eventKey, disabled } = child.props;
        const { props: { children: kids } } = children;
        return <NavItem
                href="#"
                title={ title }
                active={ activeTab === eventKey }
                disabled={ disabled }
                onClick={ e => onClick(e, kids, eventKey) }
                >
                    { title }
                </NavItem>
            })

    return (
        <>
            <StyledNav>
                { list }
            </StyledNav>
            <div>
                { currentContent }
            </div>
        </>
    )
};

export default Tabs;