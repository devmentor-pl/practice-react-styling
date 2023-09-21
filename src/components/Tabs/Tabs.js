import React, { useState } from "react";
import StyledTabs from "./Tabs.styled";
import Tab from "./Tab";

const tabsList = [
    {
        id: 1,
        name: 'home',
        title: 'Home',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; ',
        disabled: false,
    },
    {
        id: 2,
        name: 'profile',
        title: 'Profile',
        text: 'Donec dignissim ultricies felis, eu dictum eros congue in. In gravida lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.',
        disabled: false,
    },
    {
        id: 3,
        name: 'contact',
        title: 'Contact',
        text: 'Vivamus metus nulla, fermentum eget placerat vitae, mollis interdum elit. Pellentesque arcu augue, vulputate ut porttitor ut, suscipit non orci. Integer justo odio, suscipit eget tortor nec, molestie lobortis eros. Nullam commodo elit sit amet lacus blandit aliquet. Mauris at nibh eget nisl pulvinar dignissim.',
        disabled: true,
    }
]

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('profile')

    const handleClick = (name) => {
        setActiveTab(name)
    }

    const renderTab = tabsList.map(({ id, name, title, disabled }) => {
        return (
            <Tab onClick={(e) => handleClick(name)} active={activeTab === name} key={id} name={name} disabled={disabled}>{title}</Tab>

        )
    })

    const renderText = tabsList.map(item => {
        if (item.name === activeTab) {
            return <p key={item.id}>{item.text}</p>
        }
    })

    return (
        <>
            <nav>
                <StyledTabs>{renderTab}</StyledTabs>
            </nav>

            {renderText}
        </>)
}

export default Tabs