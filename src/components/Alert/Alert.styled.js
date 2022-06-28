import styled from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    padding: 13px;
    border-radius: 4px;
    border: 1px solid #B8DAFF;
    background-color: #CCE5FF;
    color: #06357A;
    ${ props => props.variant === 'secondary' && css`
        background-color: #D3D6D8;
        border: #D1E7DD;
        color: #41464B;
        `}
`

export { StyledAlert };