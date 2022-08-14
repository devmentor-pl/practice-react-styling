import styled from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    border-radius: 0.375rem;
    padding: 1rem;
    margin-bottom: 1rem;
    color: red;
    background-color: ${
        props => {
            switch(props.variant) {
                case 'primary':
                    return '#cfe2ff'
                case 'secondary':
                    return '#e2e3e5'
                default: 
                    return '#eee'
            }
        }
    }
`

export { StyledAlert };