import styled, { css } from "styled-components";
import React, { useContext } from "react";

import TabsContext from "../TabsContext";

const StyledTabs = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  border-bottom: 1px solid #dee2e6;
`;

const StyledLink = styled.a`
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  margin-bottom: -1px;
  padding: 0.5rem 1rem;
  ${(props) =>
    props.styleLink === useContext(TabsContext) &&
    css`
      color: #495057;
      background-color: #fff;
      border-color: #dee2e6 #dee2e6 #fff;
    `};
`;

export { StyledTabs, StyledLink };
