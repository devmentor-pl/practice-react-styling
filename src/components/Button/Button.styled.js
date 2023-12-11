import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 0.3rem;
  margin-right: 0.5rem;
  background-color: ${(props) => props.theme.button.primary.bgColor};
  color: #fff;

  ${(props) =>
    props.variant === 'secondary' &&
    `
    background-color: ${props.theme.button.secondary.bgColor};
  `}

  ${(props) =>
    props.size === 'lg' &&
    css`
      font-size: 18px;
      padding: 1rem 1.5rem;
    `}
  ${(props) =>
    props.size === 'md' &&
    css`
      font-size: 16px;
      padding: 0.75rem 1rem;
    `}

  ${(props) =>
    props.active &&
    css`
      background-color: darken(${props.theme.button.primary.bgColor}, 10%);
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc;
      cursor: not-allowed;
      opacity: 0.7;
    `}
`;

export { StyledButton };
