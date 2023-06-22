import React from 'react';
import { ThemeProvider } from "styled-components";
import { variantSettingsButton } from "../src/theme";
import Button from "../src/components/Button";
import { Row, Col, Button as RBButton } from "react-bootstrap";

const Task02 = () => {
	return (
		<Row>
			<Col>
				<RBButton variant='primary' size='lg'>
					Button!
				</RBButton>
			</Col>
			<ThemeProvider theme={variantSettingsButton}>
				<Col>
					<Button variant='primary' size='lg'>
						Button!
					</Button>
				</Col>
			</ThemeProvider>
		</Row>
	);
};

export default Task02;