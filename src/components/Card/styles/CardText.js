import styled, { css } from 'styled-components';

const DefaultStyledCardText = styled.p`
    margin-top: 0;
    margin-bottom: 1rem;
`;

const StyledCardText = styled(DefaultStyledCardText)((props) => props.style);

export { StyledCardText };