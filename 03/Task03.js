import React from 'react';
import Breadcrumb from "../src/components/Breadcrumb";
import breadcrumbTheme from "../src/components/Breadcrumb/theme";
import BreadcrumbItem from "../src/components/Breadcrumb/BreadcrumbItem";
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
  );
};

export default Task03;

