import styled from "styled-components";

const StyledTabs = styled.nav`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid black;



`;

const StyledTabsChild = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  

`;

const StyledTabsLinkActive = styled.a`
    display: inline-block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    cursor: pointer;


    background-color: ${(props) => (props.active ? "whitesmoke" : "")};
`;

export { StyledTabs, StyledTabsChild, StyledTabsLinkActive };
