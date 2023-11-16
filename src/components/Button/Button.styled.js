import React from 'react';
import styled, { css } from 'styled-components';

const ButtonComponent = styled.button`
    padding: 0.5rem 1rem;
    /* font-size: 1.25rem; */
    line-height: 1.5;
    border-radius: 0.3rem;
    cursor: pointer;
    &:hover {
        background-color: ${props => {
        if (props.variant === 'primary' && !props.disabled) return '#0b5ed7'
        if (props.variant === 'secondary' && !props.disabled) return '#5c636a'
    }
    }}
    /* ${props => props.variant === 'primary' &&
        css`
            color: '#fff';
            background-color: '#0d6efd';
            border: '1px solid #0d6efd';
    `};
    ${props => props.variant === 'secondary' &&
        css`
            color: '#fff';
            background-color: '#6c757d';
            border: '1px solid #6c757d';
    `}; */

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
    }};
    /* font-size: ${props => props.size === 'lg' ? `1.25rem` : '0.875rem'} */
    /* font-size: ${props => props.size === 'lg' ? `1.25rem` : '0.875rem'} */
    font-size: ${props => {
        if (props.size === 'lg') return `1.25rem`
        if (props.size === 'sm') return '0.875rem'
    }
    };
    background-color: ${props => {
        if (props.active) return '#0b5ed7'
    }
    };
    opacity: ${props => {
        if (props.disabled) return '0.5'
    }
    };
`

const StyledButton = props => {
    console.log(props)
    const { children, variant, size, active, disabled } = props
    return (
        <ButtonComponent variant={variant} size={size} active={active} disabled={disabled}>
            {children}
        </ButtonComponent>
    )
}
export default StyledButton