import styled from "styled-components";

const DefaultStyledAlert = styled.div`
  display: block;
  padding: 12px;
  border-radius: 5px;
  background-color: lightgrey;
`;

const StyledAlert = styled(DefaultStyledAlert)((props) => props.theme);

export { StyledAlert };
