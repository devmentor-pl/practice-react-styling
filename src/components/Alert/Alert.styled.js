import styled from 'styled-components';

const StyledAlert = styled.div`
    display: block;
    border-radius: 0.375rem;
    padding: 1rem;
    margin-bottom: 1rem;
    color: red;
    ${
        props => {
            switch(props.variant) {
                case 'primary':
                    return {
                        color: '#084298',
                        backgroundColor: '#cfe2ff',
                        border: '1px solid #b6d4fe'
                    }
                case 'secondary':
                    return {
                        color: '#41464b',
                        backgroundColor: '#e2e3e5',
                        border: '1px solid #d3d6d8e'
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

export { StyledAlert };

