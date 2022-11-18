import styled, { css } from "styled-components";
import React, { useContext } from "react";

import TabsContext from "../TabsContext";

const StyledTabContent = styled.div`
  display: ${(props) =>
    props.eventKey === useContext(TabsContext) ? `block` : `none`};
`;

export { StyledTabContent };
