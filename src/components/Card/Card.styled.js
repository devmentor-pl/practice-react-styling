import styled from "styled-components";

const StyledCard = styled.div`
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
    width: 18rem;
    overflow: hidden;
`;

const CardImageTop = styled.img`
    width: 100%;
    height: auto;
`;

const CardBody = styled.div`
    padding: 1.25rem;
`;

const CardTitle = styled.h5`
    margin-bottom: 0.75rem;
`;

const CardText = styled.p`
    color: #6c757d;
`;

const Button = styled.button`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-clip: padding-box;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    
    &:hover {
        background-color: #0069d9;
        border-color: #0062cc;
    }
`;

export { StyledCard, CardImageTop, CardBody, CardTitle, CardText, Button };