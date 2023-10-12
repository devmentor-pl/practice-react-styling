import React from 'react';
import { ThemeProvider } from 'styled-components';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

const themeSettings = {
	primary: {
		color: 'blue',
		backgroundColor: 'aquamarine',
	},
	secondary: {
		color: 'green',
		backgroundColor: 'lightgreen',
	},
};

const Task01 = () => {
	return (
		<Row>
			<Col>
				<RBAlert variant='primary'>
					Uwaga! <em>Styled Components</em> nadchodzi!
				</RBAlert>
				<RBAlert variant='secondary'>
					Uwaga! <em>Styled Components</em> nadchodzi!
				</RBAlert>
			</Col>
			<Col>
				<ThemeProvider theme={themeSettings.primary}>
					<Alert>
						Uwaga! <em>Styled Components</em> nadchodzi!
					</Alert>
				</ThemeProvider>
				<ThemeProvider theme={themeSettings.secondary}>
					<Alert>
						Uwaga! <em>Styled Components</em> nadchodzi!
					</Alert>
				</ThemeProvider>
			</Col>
		</Row>
	);
};
export default Task01;


