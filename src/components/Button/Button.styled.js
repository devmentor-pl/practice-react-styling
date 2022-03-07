import styled, { css } from 'styled-components';

const generateBorder = (theme, variant, active) => {
    if (variant === 'link') {
        return 'none';
    }
    const borderColor = theme.btn.color[variant].border;
    return active ? borderColor.active : borderColor.standard;
};

const generateBgColor = (theme, variant, active) => {
    const bgColor = theme.btn.color[variant].bg;
    return active ? bgColor.active : bgColor.standard;
};

const DefaultButton = styled.button`
    background-color: transparent;
    border-radius: ${({ theme }) => theme['border-radius']};
    color: #212529;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 0.375rem 0.75rem;
    text-align: center;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    user-select: none;
    vertical-align: middle;
`;

const StyledButton = styled(DefaultButton)`
    background-color: ${({ theme, variant, active }) => generateBgColor(theme, variant, active)};
    border-radius: ${({ theme, size }) => theme.btn.size[size]['border-radius']};
    border: ${({ theme, variant, active }) => generateBorder(theme, variant)};
    color: ${({ theme, variant }) => theme.btn.color[variant].color};
    font-size: ${({ theme, size }) => theme.btn.size[size].fsize};
    padding: ${({ theme, size }) => theme.btn.size[size].padding};
    text-decoration: ${({ variant }) => (variant === 'link' ? 'underline' : 'none')};
    ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.65;
            pointer-events: none;
        `};
`;

export { StyledButton };
