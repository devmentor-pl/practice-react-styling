import React from 'react';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

import { ThemeProvider } from 'styled-components';
import themeSettings from './../src/components/Button/theme';

const Task02 = () => {
  return (
    <Row>
      <Col>
        <RBButton variant='danger' size='lg' active>
          Button!
        </RBButton>
      </Col>
      <Col>
        <ThemeProvider theme={themeSettings}>
          <Button variant='danger' size='lg' active>
            Button!
          </Button>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task02;
