import styled, { css } from 'styled-components';

const StyledAlert = styled.div`
  --primary-background-color: #cce5ff;
  --primary-border-color: #b8daff;
  --primary-color: #004085;
  background-color: var(--primary-background-color);
  border-radius: 0%.25rem;
  border: 1px solid var(--primary-border-color);
  color: var(--primary-color);
  display: block;
  padding: 0.75rem 1.25rem;
  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: #e2e3e5;
      border-color: #d3d6d8;
      color: #41464b;
    `}

  ${(props) =>
    props.variant === 'success' &&
    css`
      background-color: #d1e7dd;
      border-color: #badbcc;
      color: #0f5132;
    `}

  ${(props) =>
    props.variant === 'danger' &&
    css`
      background-color: #f8d7da;
      border-color: #f5c2c7;
      color: #842029;
    `}
  ${(props) =>
    props.variant === 'warning' &&
    css`
      background-color: #fff3cd;
      border-color: #ffecb5;
      color: #664d03;
    `}

  ${(props) =>
    props.variant === 'info' &&
    css`
      background-color: #cff4fc;
      border-color: #b6effb;
      color: #055160;
    `}

  ${(props) =>
    props.variant === 'light' &&
    css`
      background-color: #fefefe;
      border-color: #fdfdfe;
      color: #636464;
    `}

  ${(props) =>
    props.variant === 'dark' &&
    css`
      background-color: #d3d3d4;
      border-color: #bcbebf;
      color: #141619;
    `}
`;

export { StyledAlert };
