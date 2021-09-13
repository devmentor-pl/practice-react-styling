import React, { useState } from 'react';
import TabsItem from './TabsItem';
import { StyledTabs } from './styles/Tabs';

const Tabs = props => {
    const tabsValue = props.children[1].props.children.props.children;
    const [description, setDescription] = useState(tabsValue);

    console.log('%cTabs tabsValue: ', 'color:blue', tabsValue);

    const handleClick = (e) => {
        e.preventDefault();
        const title = e.target.innerHTML;
        const itemArray = props.children.map((item) => item.props.title);
        const descriptions = props.children.map(
            (descrip) => descrip.props.children.props.children
        );

        console.log('%cTabs title: ', 'color:blue', title);
        console.log('%cTabs itemArray: ', 'color:blue', itemArray);
        console.log('%cTabs description: ', 'color:blue', descriptions);

        for (let i = 0; i < itemArray.length; i++) {
            if (title === itemArray[i]) {
                setDescription(descriptions[i]);
            }
        }
    };
    return (
        <>
            <StyledTabs onClick={ handleClick }>{ props.children }</StyledTabs>
            <div>{ description }</div>
        </>
    )
};

Tabs.Item = TabsItem;

export default Tabs;