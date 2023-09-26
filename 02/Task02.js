import React from 'react';
import { ThemeProvider } from 'styled-components';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

import buttonThemeSettings from '../src/components/Button/buttonThemeSettings.js';

const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant='primary' size='sm'>
                    Button!
                </RBButton>
            </Col>
            <Col>
                <ThemeProvider theme={buttonThemeSettings}>
                    <Button value='Button!' variant='secondary' size='sm' />
                </ThemeProvider>
            </Col>
        </Row>
    );
};

export default Task02;
