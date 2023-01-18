import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    button {
        width: 55%;
    }
    ${props => props.style}
`
const StyledImg = styled.img.attrs(props => ({
    src: props.src
}))`
    width: 100%;

`
const StyledTitle = styled.h2`
    font-size: 1.25rem;
    margin-bottom: .75rem;
`

const StyledText = styled.p`
    margin-bottom: .75rem;
`
export {StyledDiv, StyledImg, StyledTitle, StyledText} 