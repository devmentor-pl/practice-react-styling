import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background-color: #007bff;
  border-color: #007bff;
  border-radius: 0.3rem;
  border: 1px solid transparent;
  color: #fff;
  font-size: 1.25rem;
  line-height: 1.5;
  padding: 0.5rem 1rem;

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: #6c757d;
      border-color: #6c757d;
      color: #fff;
    `}

  ${(props) =>
    props.size === 'sm' &&
    css`
      border-radius: 0.2rem;
      font-size: 0.875rem;
      padding: 0.25rem 0.5rem;
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    props.active &&
    css`
      background-color: #565e64;
      border-color: #51585e;
    `}

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.6;
    `}
`;

export { StyledButton };
