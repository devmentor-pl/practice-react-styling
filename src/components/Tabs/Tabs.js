import React, { useState, useEffect } from 'react';
import Navigation from './Navigation.styled';
import Title from './Title.styled.js';

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
        <div>
            <Navigation>{renderTitles()}</Navigation>
            <p>{renderContent(eventKey)}</p>
        </div>
    );
};

export default Tabs;
