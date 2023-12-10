import styled from 'styled-components';

const DefaultStyledAlert = styled.div.attrs(({variant}) => ({
    variant: variant ? variant : null
}))`
    background-color: red;
    padding: 0.75rem 1.25rem;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    position: relative;
    border: 1px solid transparent;
`


const StyledAlert = styled(DefaultStyledAlert)(
    ({variant,theme}) => {
        if(variant === 'primary'){
            return theme.primary
        }
        if(variant === 'secondary'){
            return theme.secondary
        }
    }
)

export { StyledAlert };