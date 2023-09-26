import styled from 'styled-components';

const DefaultStyledAlert = styled.div`
    display: block;
    padding: 0.75rem 1.25rem;
    border-radius: 0.25rem;
`;

const StyledAlert = styled(DefaultStyledAlert)(({ theme, variant }) => theme[variant]);

export { StyledAlert };
