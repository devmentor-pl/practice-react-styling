import styled from 'styled-components';

const DefaultStyledButton = styled.button`
    line-height: 1.5;
    border: none;
    margin: 0
`

const StyledButton = styled(DefaultStyledButton)(({ variant, size, theme, disabled, active }) => (
    {
        fontSize: theme.size[size].fontSize,
        color: theme.variant[variant].color,
        backgroundColor: active ? theme.variant[variant].active.backgroundColor : theme.variant[variant].backgroundColor,
        borderColor: active ? theme.variant[variant].active.borderColor : theme.variant[variant].borderColor,
        padding: theme.size[size].padding,
        borderRadius: theme.size[size].borderRadius,
        opacity: disabled ? '.65' : '1'
    }
));

export default StyledButton;