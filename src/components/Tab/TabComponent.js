import React, { useState } from "react";
import StyledTabComponent from "./TabComponent.styled";
import Tabs from "./Tabs";
import TabContent from "./TabContent";

const TabComponent = () => {
    const data = [
        {
            label: "Home",
            active: false,
            disabled: false,
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
        },
        {
            label: "Profile",
            active: true,
            disabled: false,
            content:
                "Donec dignissim ultricies felis, eu dictum eros congue in. In gravida lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.",
        },
        {
            label: "Contact",
            active: false,
            disabled: true,
            content: null,
        },
    ];

    const [tabs, setTabs] = useState(data);

    const handleClick = (id) => {
        const newTabs = tabs.map((tab) => {
            if (tab.label === id) {
                tab.active = true;
                return tab;
            } else {
                tab.active = false;
                return tab;
            }
        });
        setTabs(newTabs);
    };

    return (
        <StyledTabComponent>
            <Tabs tabs={tabs} handleClick={handleClick} />
            {tabs.map((tab) =>
                tab.active === true ? (
                    <TabContent key={tab.label} content={tab.content} />
                ) : null
            )}
        </StyledTabComponent>
    );
};

export default TabComponent;
