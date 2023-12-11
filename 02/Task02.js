import React from 'react';

import { Row, Col, Button as RBButton } from 'react-bootstrap';
import { StyledButton } from '../src/components/Button/Button.styled';

const Task02 = () => {
  const theme = {
    button: {
      primary: {
        bgColor: 'green',
      },
      secondary: {
        bgColor: '#007bff',
      },
    },
  };

  return (
    <Row>
      <Col>
        <RBButton variant="primary" size="lg">
          Button!
        </RBButton>
      </Col>
      <Col>
        <StyledButton theme={theme} variant="secondary" size="md" active>
          Button!
        </StyledButton>
        <StyledButton theme={theme} variant="primary" size="lg" disabled>
          Disabled Button!
        </StyledButton>
      </Col>
    </Row>
  );
};

export default Task02;
