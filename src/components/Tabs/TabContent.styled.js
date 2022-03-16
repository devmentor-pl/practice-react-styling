import styled, { css } from 'styled-components';

const StyledTabContent = styled.p`
  display: none;

  ${(props) =>
    props.active === true &&
    css`
      display: block;
    `}
`;

export { StyledTabContent };
