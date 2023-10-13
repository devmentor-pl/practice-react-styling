import React from 'react';

import { ThemeProvider } from 'styled-components';
import { variant } from './../src/components/Button/Button.styled';

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
				{/* w buttonach nie mozna stylami przesylac, bo nadpisza inline stylami i w tedy active i inne pseudoklasy musialby byc stytlowaNE za pomoca important, wiec zostaje takie rozwiazanie, button musi zostac owrapowany themeProviderem, i w themeProvider sie podaje wariant zamiast w atrybucie przycisku... */}
				{/* ale za to Button ma swoje customowe style jesli jest poza themeProviderem... */}
				<ThemeProvider theme={variant.secondary}>
					<Button size='lg'>Button!</Button>
					<Button active={true} size='sm'>
						Button!
					</Button>
					<Button disabled>Button!</Button>
				</ThemeProvider>
				<ThemeProvider theme={variant.primary}>
					<Button>Button!</Button>
				</ThemeProvider>
				{/* <Button>DEFAULT</Button> */}
			</Col>
		</Row>
	);
};

export default Task02;
