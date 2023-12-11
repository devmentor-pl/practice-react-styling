import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Row, Col, Breadcrumb as RBBreadcrumb } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem } from '../src/components/Breadcrumb/index';

const Task03 = () => {
  const theme = {
    primaryColor: '#007bff',
    secondaryColor: '#6c757d',
    hoverColor: '#0056b3',
  };
  return (
    <ThemeProvider theme={theme}>
      <Row>
        <Col>
          <RBBreadcrumb>
            <RBBreadcrumb.Item href="#">Home</RBBreadcrumb.Item>
            <RBBreadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </RBBreadcrumb.Item>
            <RBBreadcrumb.Item active>Data</RBBreadcrumb.Item>
          </RBBreadcrumb>
        </Col>
        <Col>
          <Breadcrumb>
            <BreadcrumbItem href="#">Home</BreadcrumbItem>
            <BreadcrumbItem href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </BreadcrumbItem>
            <BreadcrumbItem active>Data</BreadcrumbItem>
          </Breadcrumb>
        </Col>
      </Row>
    </ThemeProvider>
  );
};
export default Task03;
