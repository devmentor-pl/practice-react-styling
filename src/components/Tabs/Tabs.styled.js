import styled, { css } from "styled-components";

const StyledTabs = styled.nav`
  color: white;
  display: flex;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0;
  border-bottom: 1px solid black;
`;

const DefaultStyledTabsLink = styled.a`
  display: block;
  padding: 6px 12px;
  border: 1px solid transparent;
  border-radius: 10px;
  &:hover {
    border: 1px solid skyblue;
  }
`;

const StyledTabsLinkDisabled = styled(DefaultStyledTabsLink)(
  (props) =>
    props.disabled &&
    css`
      &&,
      &&:hover {
        color: orange;
        background-color: transparent;
        border-color: transparent;
      }
    `
);

const StyledTabsLink = styled(StyledTabsLinkDisabled)(
  (props) =>
    props.active &&
    css`
      &&,
      &&:hover {
        color: red;
        background-color: #fff;
        border: 1px solid green;
      }
    `
);

const StyledTabsChild = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
`;

export { StyledTabs, StyledTabsChild, StyledTabsLink };