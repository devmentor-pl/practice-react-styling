import styled from 'styled-components';

const DefaultStyledCard = styled.section`
    width: 18rem;
    border: 1px solid #bdc1c4;
    border-radius: .3rem;
`
const StyledCard = styled(DefaultStyledCard)(props => props.style);


export default StyledCard;