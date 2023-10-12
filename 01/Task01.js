import React from 'react';
import { ThemeProvider } from 'styled-components';

import Alert from './../src/components/Alert';
import { Row, Col, Alert as RBAlert } from 'react-bootstrap';

const themeSettings = {
	color: 'green',
	backgroundColor: 'tomato',
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
				<ThemeProvider theme={themeSettings}>
					{/* to ma wygladac w ten sposob? czyli props.variant musi dobierac style z propsa ktory przekazuje - czyli gdzies pod spodem musze napisac tyle "typow" ile kolorow chce miec w wariantach? */}
					{/* <Alert variant='primary'> */}
					{/* <Alert variant='secondary'> */}
					<Alert>
						Uwaga! <em>Styled Components</em> nadchodzi!
					</Alert>
				</ThemeProvider>
				<Alert>
					Uwaga! <em>Styled Components</em> nadchodzi!
				</Alert>
			</Col>
		</Row>
	);
};

export default Task01;

