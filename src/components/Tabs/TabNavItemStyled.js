import styled, {css} from 'styled-components';

const TabNavItemStyled = styled.a`
  padding: .4rem 1rem;
  font-size: 1rem;

  ${props =>
          props.active &&
          css`
            border: 1px solid #DEE2E6;
            border-bottom-color: #fff;
            color: #6E7379;
          `};

  &:hover {
    text-decoration: none;
  }

  ${(props) =>
          props.disabled &&
          css`
	          cursor: default;
	          pointer-events: none;
	          color: #6E7379;
          `}
`;

export default TabNavItemStyled;