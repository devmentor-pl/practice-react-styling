import styled, { css } from 'styled-components';

const DefaultStyledCardTitle = styled.div`
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
`;

const StyledCardTitle = styled(DefaultStyledCardTitle)((props) => props.style);

export { StyledCardTitle };