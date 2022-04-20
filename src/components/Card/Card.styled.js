import styled from 'styled-components';

const StyledCardDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width:18rem;
    min-width: 0;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
`;

const StyledCardImg = styled.img`
    vertical-align: middle;
    border-style: none;
    width: 100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
`;

const StyledCardBody = styled.div `
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
`;

const StyledCardTitle = styled.div`
    margin-bottom: 0.75rem;

    h5 {
        font-size: 1.25rem;
    }

`;

const StyledCardText = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;

`;

export {StyledCardDiv,StyledCardImg,StyledCardBody,StyledCardTitle,StyledCardText };