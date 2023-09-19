import styled, { css } from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    margin-bottom: 16px;
    padding: 12px 20px;
    color: #004085;
    background-color:  #CCE5FF;
    border-radius: 4px;
    border: 1px solid #B8DAFF;
    ${props => {
        if (props.variant === 'primary') {
            return props.theme.primary
        } else if (props.variant === 'secondary') {
            return props.theme.secondary
        }
    }}
`

export { StyledAlert };