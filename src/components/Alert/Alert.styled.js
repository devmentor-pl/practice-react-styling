import styled from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    padding: 12px 20px;
    margin: 0 0 10px;
    --color-alfa: ${ props => props.theme.colorAlfa};
    color: var(--color-alfa);
    border-radius: 5px;
    background-color: ${
        props => props.variant === 'primary'
        ? '#5585b5' : '#bbe4e9'
    };  
`

export { StyledAlert };
