import React from 'react';
import { ThemeProvider } from 'styled-components';

import Alert from './../src/components/Alert';
import { themeSettings } from '../src/components/Alert/Alert.styled';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

const Task01 = () => {
	return (
		<Row>
			<Col>
				<RBAlert variant='primary'>
					Uwaga! <em>Styled Components</em> nadchodzi!
				</RBAlert>
				<RBAlert variant='success'>
					Uwaga! <em>Styled Components</em> nadchodzi!
				</RBAlert>
			</Col>
			<Col>
				<ThemeProvider theme={themeSettings}>
					<Alert variant={themeSettings.primary}>
						Uwaga! <em>Styled Components</em> nadchodzi!
					</Alert>
				</ThemeProvider>
					<Alert>Uwaga! <em>Styled defaultTheme Components</em> nadchodzi!</Alert>
			</Col>
		</Row>
	);
};
export default Task01;


