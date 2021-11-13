import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border-radius: .25rem;
    border: 1px solid transparent;
`

const StyledAlert = styled(DefaultStyledAlert)( ({ variant, theme }) => (
    {
        backgroundColor: theme[variant].backgroundColor,
        color: theme[variant].color,
        borderColor: theme[variant].borderColor,
    })
)

export { StyledAlert };