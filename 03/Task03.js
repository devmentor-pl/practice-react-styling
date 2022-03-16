import React from 'react';

import { Row, Col, Breadcrumb as RBBreadcrumb } from 'react-bootstrap';
import Breadcrumb from '../src/components/Breadcrumb/Breadcrumb';
import BreadcrumbItem from '../src/components/Breadcrumb/BreadcrumbItem';
import BreadcrumbItemLink from '../src/components/Breadcrumb/BreadcrumbItemLink';

const Task03 = () => {
  return (
    <Row>
      <Col>
        <RBBreadcrumb>
          <RBBreadcrumb.Item href='#'>Home</RBBreadcrumb.Item>
          <RBBreadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
            Library
          </RBBreadcrumb.Item>
          <RBBreadcrumb.Item active>Data</RBBreadcrumb.Item>
        </RBBreadcrumb>
      </Col>

      <Col>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbItemLink href='#'>Home</BreadcrumbItemLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbItemLink href='#'>Library</BreadcrumbItemLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbItemLink active>Data</BreadcrumbItemLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default Task03;
