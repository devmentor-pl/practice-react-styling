import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledButton } from './Button.styled';

const Button = (props) => {
    const {variant, active = false, disabled = false, size} = props;
    const themeSize = size === 'sm'
        ? {
            padding: '.375rem .75rem',
            fontSize: '1rem',
            borderRadius: '.2rem',
        } 
        : {     
            padding: '.5rem 1rem',
            fontSize: '1.25rem',
            borderRadius: '.3rem',
        }
    const themeVariant = {
        primary: {
            '--color-beta': 'rgba(34, 127, 223, 1)',
            '--color-gamma': 'rgba(34, 127, 223, 0.5)',
            '--color-epsilon': 'rgba(0, 88, 176, 1)',
        },
        secondary: {
            '--color-beta': 'rgba(193, 22, 25, 1)',
            '--color-gamma': 'rgba(193, 22, 25, 0.5)',
            '--color-epsilon': 'rgba(146, 1, 3, 1)',
        }
    }
  
    return (
        <ThemeProvider theme={{...themeSize, ...themeVariant[variant], isDisabled: disabled, isActive: active}}>
            <StyledButton>{props.children}</StyledButton>
        </ThemeProvider>
    )
}

export default Button