import styled from 'styled-components';

const StyledAlert = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  color: #fff;
  background-color: ${(props) =>
    props.theme[props.variant] || props.theme.default};
`;

export { StyledAlert };
