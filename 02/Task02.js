import React from 'react';
import styled from 'styled-components';

import { ThemeProvider } from 'react-bootstrap';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';



const CustomButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  background-color: ${props => props.theme.backgroundColor};
`;

CustomButton.defaultProps = {
  theme: {
    main: 'red',
    backgroundColor: 'black',
  },
};

const theme = {
  main: 'blue',
  backgroundColor: 'blue',
};

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
				<ThemeProvider theme={theme}>
					<CustomButton>THEMED</CustomButton>
				</ThemeProvider>
				<CustomButton>DeFAULT</CustomButton>
			</Col>
		</Row>
	);
};

export default Task02;

