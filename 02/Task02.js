import React from 'react';
import Button from './../src/components/Button/Button';
import {Row, Col, Button as RBButton} from 'react-bootstrap';
import {ThemeProvider} from 'styled-components';
import themeSettings from './../src/components/Button/styled/theme';

const Task02 = () => {
    return (
        <Row>
            <Col>
                <RBButton variant="success" size="lg">Button!</RBButton>
            </Col>
            <Col>
				<ThemeProvider theme={themeSettings}>
					<Button variant="success" size="lg" active>Button!</Button>
				</ThemeProvider>
			</Col>
        </Row>
    )
}

export default Task02;

