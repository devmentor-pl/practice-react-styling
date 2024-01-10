import styled from 'styled-components';

const StyledButton = styled.button`
    padding: ${props => (props.size === 'lg' ? '0.5rem 1rem' : '0.25rem 0.5rem')};
    font-size: ${props => (props.size === 'lg' ? '1.25rem' : '1rem')};
    background-color: ${props => props.theme[props.variant] || '#007bff'};
    border: 1px solid ${props => props.theme[props.variant] || '#007bff'};
    border-radius: 0.25rem;
    color: white;
    opacity: ${props => (props.disabled ? 0.65 : 1)};
    pointer-events: ${props => (props.disabled ? 'none' : 'initial')};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};

    &:active {
        background-color: ${props => props.active ? props.theme[props.variant + 'Dark'] : props.theme[props.variant]};
    }

    &:hover {
        background-color: ${props => !props.disabled && props.theme[props.variant + 'Hover']};
    }
`;

export { StyledButton };