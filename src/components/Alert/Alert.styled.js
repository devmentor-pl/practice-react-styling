import styled, {css} from 'styled-components';

const DefaultStyledAlert = styled.div`
    display: block;
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: #c5aeb4; 
`

const StyledAlert = styled(DefaultStyledAlert)`
    ${(props)=> {
        const {variant} = props;
        if(variant === 'info'){
            console.log(props.theme.primary)
            return props.theme.primary
        }
        if(variant === 'error'){
            console.log(props.theme.danger)
            return props.theme.danger
        } // tych ifów mozna robić w nieskonczoność, jest na to lepsze rozwiązanie?
        return null;
    }}
`;

export { StyledAlert };