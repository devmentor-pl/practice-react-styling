import React from 'react';
import Breadscrumb from '../src/components/Breadscrumb'
import { Row, Col, Breadcrumb as RBBreadcrumb } from 'react-bootstrap';

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
                <Breadscrumb />
            </Col>
        </Row>
    )
}

export default Task03;

