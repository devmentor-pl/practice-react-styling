import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/components/theme';
import { Row, Col, Breadcrumb as RBBreadcrumb } from 'react-bootstrap';
import { Breadcrumb, BreadcrumbItem } from '../src/components/Breadcrumb/index';

const Task03 = () => {
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
          <ThemeProvider theme={theme}>
            <Breadcrumb>
              <BreadcrumbItem href="#">Home</BreadcrumbItem>
              <BreadcrumbItem href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
              </BreadcrumbItem>
              <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
          </ThemeProvider>
        </Col>
      </Row>
    </ThemeProvider>
  );
};
export default Task03;
