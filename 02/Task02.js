import React from 'react';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

import { ThemeProvider } from 'styled-components';
import themeSettings from './theme';

const Task02 = () => {
  return (
    <Row>
      <Col>
        <RBButton variant='primary' size='lg' disabled>
          Button!
        </RBButton>
      </Col>
      <Col>
        <ThemeProvider theme={themeSettings}>
          <Button variant='primary' size='lg' disabled>
            Button!
          </Button>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task02;
