import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
    display: block;
    margin-bottom: 16px;
    padding: 12px 20px;
    border-radius: 4px;
`
const StyledAlert = styled(DefaultStyledAlert)(
    ({ variant, theme }) => theme[variant]
)

export { StyledAlert };