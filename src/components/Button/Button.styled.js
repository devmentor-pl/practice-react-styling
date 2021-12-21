import styled, {css} from 'styled-components'

const DefaultStyledButton = styled.button`
    --color-alfa: ${props=>props.theme.colorBackground};
    display: inline-block;
    padding: .5rem 1rem;
    margin-bottom: 1rem;
    // border: none;
    border: 1px solid var(--color-alfa);
    border-radius: 0.3rem;
    background-color: var(--color-alfa);
    color: #fff;
    font-size: 1.25rem;
    // transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
`


const StyledButton = styled(DefaultStyledButton)(props=> props.style);

export default StyledButton;