import React from 'react';

import { ThemeProvider } from 'styled-components';
import { variant } from './../src/components/Button/Button.styled';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {
	return (
		<Row>
			<Col>
				<RBButton variant='primary' size='lg'>
					Button!
				</RBButton>
				<RBButton variant='secondary' size='lg'>
					Button!
				</RBButton>
				<RBButton variant='primary' size='sm'>
					Button!
				</RBButton>
				<RBButton variant='secondary' size='sm'>
					Button!
				</RBButton>
				<RBButton variant='primary' size='sm' active>
					Button!
				</RBButton>
				<RBButton variant='secondary' size='sm' active>
					Button!
				</RBButton>
				<RBButton variant='primary' size='sm' disabled>
					Button!
				</RBButton>
				<RBButton variant='secondary' size='sm' disabled>
					Button!
				</RBButton>
			</Col>
			<Col>
				<ThemeProvider theme={variant}>
					<Button style={variant.primary} size='lg'>
						Button!
					</Button>
					<Button style={variant.secondary} size='lg'>
						Button!
					</Button>

					<Button style={variant.primary} size='sm'>
						Button!
					</Button>
					<Button style={variant.secondary} size='sm'>
						Button!
					</Button>

					<Button active style={variant.primary} size='sm'>
						Button!
					</Button>
					<Button  active style={variant.secondary} size='sm'>
						Button!
					</Button>

					<Button disabled style={variant.primary} size='sm'>
						Button!
					</Button>
					<Button disabled style={variant.secondary} size='sm'>
						Button!
					</Button>
				</ThemeProvider>
			</Col>
		</Row>
	);
};

export default Task02;
