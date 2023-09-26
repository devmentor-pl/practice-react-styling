import styled from 'styled-components';

const DefaultStyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
    overflow: hidden;
`;

const StyledCard = styled(DefaultStyledCard)(props => props.style);

export default StyledCard;
