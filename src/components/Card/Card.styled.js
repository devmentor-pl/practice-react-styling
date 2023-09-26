import styled from "styled-components";

const StyledCard = styled.div`
    width: ${props => props.style.width};
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
`

const StyledCardImg = styled.img`
    flex-shrink: 0;
    width: 100%;
    vertical-align: middle;
    border-style: none;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
`

const StyledCardBody = styled.div`
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`

const StyledCardTitle = styled.div`
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.2;
`

const StyledCardText = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
`

export { StyledCard, StyledCardImg, StyledCardBody, StyledCardTitle, StyledCardText }