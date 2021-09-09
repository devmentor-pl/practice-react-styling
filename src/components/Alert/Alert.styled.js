import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
    display: block;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
`

const StyledAlert = styled(DefaultStyledAlert)(({variant, theme})=> ({
	backgroundColor: `${theme[variant].backgroundColor}`,
	color: `${theme[variant].color}`,
    border: `1px solid ${theme[variant].borderColor}`
}));

export { StyledAlert };