import styled, {css} from 'styled-components';

const DefaultStyledAlert = styled.div`
    display: block;
    padding: 0.75rem 1.25rem;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    background-color: #FFFFFF;
    color: #000000;;
`

const StyledAlert = styled(DefaultStyledAlert)`
    ${(props) => {
        const {variant} = props;
        return props.theme[variant]
    }}
`

export { StyledAlert };