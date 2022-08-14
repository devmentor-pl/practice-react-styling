import React from 'react';
import styled from 'styled-components';

const ButtonComponent = styled.button`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
    cursor: pointer;
    &:hover {
        background-color: ${
            props => {
                if(props.variant === 'primary') return '#0b5ed7'
                if(props.variant === 'secondary') return '#5c636a'
            }
        }
    }
    ${props => {
        switch (props.variant) {
            case 'primary':
                return {
                    color: '#fff',
                    backgroundColor: '#0d6efd',
                    border: '1px solid #0d6efd',

                }
            case 'secondary':
                return {
                    color: '#fff',
                    backgroundColor: '#6c757d',
                    border: '1px solid #6c757d'
                }
            default:
                return {
                    color: 'white',
                    backgroundColor: 'red',
                    border: 'orange'
                }
        }
    }
    }
`
const StyledButton = props => {
    console.log(props)
    const { children, variant } = props
    return (
        <ButtonComponent variant={variant}>
            {children}
        </ButtonComponent>
    )
}
export default StyledButton