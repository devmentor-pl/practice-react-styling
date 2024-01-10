import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeProvider } from 'styled-components';
import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

const theme = {
    primary: '#007bff',
    primaryDark: '#0056b3',
    primaryHover: '#0069d9',
    secondary: '#6c757d',
    secondaryDark: '#545b62',
    secondaryHover: '#5a6268',
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Komponenty React Boostrap</h2></Col>
                    <Col>
                        <h2>Komponenty Twoje</h2>
                    </Col>
                </Row>
                <Task01/>
                <Task02/>
                <Task03/>
                <Task04/>
                <Task05/>
            </Container>
        </ThemeProvider>
    )
}

export default App;