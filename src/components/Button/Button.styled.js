import styled from 'styled-components';

const DefaultStyledButton = styled.button`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    font-size: 1rem;
    padding: .375rem .75rem;
    border-radius: .25rem;
    line-height: 1.5;
    border: none;
    margin: 0;

    &:hover {
        background-color: #0069d9;
        border-color: #0062cc;
    }
`

const StyledButton = styled(DefaultStyledButton)(({ variant, size, theme, disabled, active }) => (
    {
        fontSize: size ? theme.size[size].fontSize : null,
        padding: size ? theme.size[size].padding : null,
        borderRadius: size ? theme.size[size].borderRadius : null,
        opacity: disabled ? '.65' : '1'
    }
));

export default StyledButton;