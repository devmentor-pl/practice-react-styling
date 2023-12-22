import React from "react";
import { Row, Col, Breadcrumb as RBBreadcrumb } from "react-bootstrap";
import { BreadcrumbItem } from "../src/components/Breadcrumb";
import { Breadcrumb } from "../src/components/Breadcrumb";

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
					<BreadcrumbItem href='#'>Home</BreadcrumbItem>
					<BreadcrumbItem href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
						Library
					</BreadcrumbItem>
					<BreadcrumbItem active='active'>Data</BreadcrumbItem>
				</Breadcrumb>
			</Col>
		</Row>
	);
};
export default Task03;
