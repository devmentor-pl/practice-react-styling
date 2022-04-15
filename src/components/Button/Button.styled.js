import styled, {css} from 'styled-components';

const DefaultStyledButton = styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 5px 10px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
    &:disabled {
        color: grey;
        opacity: 0.7;
        cursor: default;
  }
`
const StyledVariantButton = styled(DefaultStyledButton)`
    ${(props)=> {
        const {variant} = props;
        if(variant === 'primary'){
            return props.theme.primaryBtn
        }
        if(variant === 'success'){
            return props.theme.successBtn
        }
        return null;
    }}
`;

const StyledButton = styled(StyledVariantButton)`
    ${(props)=> {
        const {size} = props;
        if(size === 'lg'){
            return props.theme.largeBtn
        }
        if(size === 'sm'){
            return props.theme.smallBtn
        }
        return null;
    }}
`;


export {StyledButton};