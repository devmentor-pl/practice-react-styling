import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import Button from '../src/components/Button/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {
  return (
    <Row>
      <Col>
        <RBButton variant="primary" size="lg">
          Button!
        </RBButton>
      </Col>
      <Col>
        <ThemeProvider theme={theme}>
          <Button variant="primary" size="large">
            Button!
          </Button>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task02;
