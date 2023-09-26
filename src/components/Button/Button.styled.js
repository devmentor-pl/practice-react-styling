import styled from 'styled-components';

const DefaultStyledButton = styled.button`
    border: none;
    padding: .375rem .75rem;
    background-color: #fff;
    border-radius: 5px;
    transition: background-color 0.15s ease-in-out;
`;

const StyledButton = styled(DefaultStyledButton)(({ theme, variant, size }) => {
    return `
    ${theme[variant]}
    ${theme[size]}
  `;
});

export { StyledButton };
