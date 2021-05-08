import styled, { css } from "styled-components";

const DefaultStyledTabs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border-bottom: 1px solid #dee2e6;
  color: black;
  z-index: 0;
`;

const StyledTabs = styled(DefaultStyledTabs)((props) => props.style);

export { StyledTabs };
