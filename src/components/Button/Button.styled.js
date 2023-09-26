import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

  ${props => props.variant === 'primary' && css`
    background-color: ${props.theme.primaryBackground};
    border-color: ${props.theme.primaryBorder};
    color: ${props.theme.primaryTextColor};
  `};

  ${props => props.variant === 'secondary' && css`
    background-color: ${props.theme.secondaryBackground};
    border-color: ${props.theme.secondaryBorder};
    color: ${props.theme.secondaryTextColor};
  `};

  ${props => props.size === 'lg' && css`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  `};

  &:hover {
    cursor: pointer;
    background-color: #00000030
  }

  &:focus {
    background-color: #00000030;
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${props => props.theme[props.variant + 'Border']};
  }

  &:active {
    background-color: #00000030
  }

  &:disabled {
    background-color: #A9C9C9
  }
`

// const StyledButton = styled(StyledButtonDefault)(
//   props => ({
//     backgroundColor: props.theme[props.variant + 'Background'],
//     borderColor: props.theme[props.variant + 'Border'],
//     color: props.theme[props.variant + 'TextColor']
//   })
// )

export { StyledButton }