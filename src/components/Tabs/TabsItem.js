import React, { useState } from 'react';
import { StyledTabsItem } from './styles/TabsItem';

const TabsItem = props => {
    const [item, setItem] = useState('Profile');

    console.log('%cTabsItem item: ', 'color:blue', item);
    
    const handleClick = (e) => {
        console.log('%cTabsItem title: ', 'color:blue', title);
        setItem(title);
    };

const { disabled, title } = props;
    console.log('%cTabsItem disabled, title: ', 'color:blue', disabled, title);
    return (
        <StyledTabsItem
            onClick={ handleClick }
            disabled={ disabled }
            item={ item }
            title={ title }
        >
            {title}
        </StyledTabsItem>
    )
};

export default TabsItem;