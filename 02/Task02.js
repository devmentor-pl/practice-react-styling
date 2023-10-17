import React from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './../src/components/Button/Button.styled';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {
	return (
		<Row>
			<Col>
				<RBButton variant='secondary' size='lg'>
					Button!
				</RBButton>
				<RBButton active variant='secondary' size='sm'>
					Button!
				</RBButton>
				<RBButton disabled variant='secondary'>
					Button!
				</RBButton>
				<RBButton variant='primary'>Button!</RBButton>
			</Col>
			<Col>
				<ThemeProvider theme={theme}>
					<Button size='lg' variant='secondary'>
						Button!
					</Button>
					<Button size='sm' active variant={'secondary'}>Button!</Button>
					<Button disabled variant={'secondary'}>Button!</Button>
					<Button variant={'primary'}>Button!</Button>
				</ThemeProvider>
			</Col>
		</Row>
	);
};

export default Task02;
