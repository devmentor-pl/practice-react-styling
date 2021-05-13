import React from "react";

import { Row, Col, Breadcrumb as RBBreadcrumb } from "react-bootstrap";
import Breadcrumb from "./../src/components/BreadCrumb/Breadcrumb";
import BreadcrumbItem from "./../src/components/BreadCrumb/BreadcrumbItem";
import Slash from "./../src/components/BreadCrumb/Slash";

const Task03 = () => {
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
        <Breadcrumb>
          <BreadcrumbItem name={"home"} href={"#"}>
            Home
          </BreadcrumbItem>
          <Slash />
          <BreadcrumbItem name={"library"} href={"#"}>
            Library
          </BreadcrumbItem>
          <Slash />
          <BreadcrumbItem name={"data"} href={"#"}>
            Data
          </BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default Task03;
