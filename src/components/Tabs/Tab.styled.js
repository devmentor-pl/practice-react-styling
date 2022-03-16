import styled, { css } from 'styled-components';

const StyledTab = styled.a`
  display: block;
  ${(props) =>
    props.active === true &&
    css`
      color: #495057;
    `}
`;

export { StyledTab };
