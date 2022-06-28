import styled, {css} from 'styled-components';

const DefaultStyledAlert = styled.div`
    display: block;
    padding: 13px;
    border-radius: 4px;
    border: 1px solid #000000;
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