import styled from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    --bg-color: yellow;
    background-color: var(--bg-color);
    /* background-color: orange; */
    color: red;
    background-color: ${
        props => props.variant === 'primary' ? '#cfe2ff' : null
    }
`

export { StyledAlert };

