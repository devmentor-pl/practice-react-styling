import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledButton } from './Button.styled'

const themeSettings = {
  variant: {
    primary: {
      color: '#fff',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      hoverBackgroundColor: '#0b5ed7'
    },
    secondary: {
      color: '#fff',
      backgroundColor: '#6c757d',
      borderColor: '#6c757d',
      hoverBackgroundColor: '#5c636a'
    }
  },
  size: {
    small: {
      padding: '0.25rem 0.5rem',
      fontSize: '0.875rem',
      borderRadius: '0.2rem'
    },
    large: {
      padding: '0.5rem 1rem',
      fontSize: '1.25rem',
      borderRadius: '0.3rem'
    }
  }
}

const Button = (props) => {
  const { variant, size, active, disabled } = props

  return (
    <ThemeProvider theme={themeSettings}>
      <StyledButton
        variant={variant}
        size={size}
        disabled={disabled}
        active={active}
      >{props.children}
      </StyledButton>
    </ThemeProvider>
  )
}

export default Button
