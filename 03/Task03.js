import React from 'react';
import Breadcrumb from "../src/components/Breadcrumb";
import breadcrumbTheme from "../src/components/Breadcrumb/theme";
import { ThemeProvider } from "styled-components";
import { Row, Col, Breadcrumb as RBBreadcrumb } from "react-bootstrap";

const Task03 = () => {
  console.log(breadcrumbTheme);
  return (
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
        <ThemeProvider theme={breadcrumbTheme}>
          <Breadcrumb></Breadcrumb>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task03;

