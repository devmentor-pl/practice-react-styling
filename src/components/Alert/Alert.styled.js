import styled from 'styled-components';

const defaultAlert = styled.div`
    display: block;
    margin-bottom: 1rem;
    padding: 0.75rem 1.25rem;
`;

const StyledAlert = styled(defaultAlert)`
    background-color: ${({ theme, variant = 'primary' }) => theme.color[variant].bg};
    border-radius: ${({ theme }) => theme['border-radius']};
    border: 1px solid ${({ theme, variant = 'primary' }) => theme.color[variant].border};
    color: ${({ theme, variant = 'primary' }) => theme.color[variant].color};
`;

export { StyledAlert };
