import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StyledButton } from './Button.styled'

const themeSettings = {
  variant: {
    primary: {
      color: '#fff',
      backgroundColor: '#0e4bd0',
      borderColor: '#0e4bd0',
      hoverBackgroundColor: '#0e4bd0'
    },
    secondary: {
      color: '#fff',
      backgroundColor: '#f1b72e',
      borderColor: '#f1b72e',
      hoverBackgroundColor: '#f1b72e'
    }
  },
  size: {
    small: {
      padding: '6px 12px',
      fontSize: '16px',
      borderRadius: '6px'
    },
    large: {
      padding: '8px 15px',
      fontSize: '24px',
      borderRadius: '12px'
    }
  }
}

const Button = (props) => {
  const { variant,active, disabled,size } = props

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