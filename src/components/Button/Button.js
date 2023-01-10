import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledButton } from './Button.styled';

const Button = (props) => {
    const {variant, active = false, disabled = false, size} = props;
    const themeSize = size === 'sm'
        ? {
            padding: '.25rem .5rem',
            fontSize: '.875rem',
            lineHeight: '1.5',
            borderRadius: '.2rem',
        } 
        : {     
            padding: '.5rem 1rem',
            fontSize: '1.25rem',
            lineHeight: '1.5',
            borderRadius: '.3rem',
        }
    const themeVariant = {
        primary: {
            '--color-beta': 'rgba(34, 127, 223, 1)',
            '--color-gamma': 'rgba(34, 127, 223, 0.5)',
        },
        secondary: {
            '--color-beta': 'rgba(193, 22, 25, 1)',
            '--color-gamma': 'rgba(193, 22, 25, 0.5)',
        }
    }
  
    return (
        <ThemeProvider theme={{...themeSize, ...themeVariant[variant], isDisabled: disabled, isActive: active}}>
            <StyledButton>{props.children}</StyledButton>
        </ThemeProvider>
    )
}

export default Button