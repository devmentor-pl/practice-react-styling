import React, { useState, useEffect } from 'react';
import StyledTabs from './Tabs.styled';
import { Header, Title } from './Header.styled';
import MainContent from './MainContent.styled';

const Tabs = ({ defaultActiveKey = '', children }) => {
    const [eventKey, setEventKey] = useState('');

    useEffect(() => {
        setEventKey(defaultActiveKey);
    }, []);

    const renderTitles = () => {
        return React.Children.map(children, child => (
            <Title isActive={eventKey === child.props.eventKey} onClick={() => setEventKey(child.props.eventKey)}>
                {child.props.title}
            </Title>
        ));
    };

    const renderContent = eventKey => {
        return React.Children.map(children, child => {
            if (child.props.eventKey === eventKey) {
                return child;
            }
        });
    };

    return (
        <StyledTabs>
            <Header>{renderTitles()}</Header>
            <MainContent>{renderContent(eventKey)}</MainContent>
        </StyledTabs>
    );
};

export default Tabs;
