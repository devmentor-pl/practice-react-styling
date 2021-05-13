import React from "react";
import StyledBreadCrumbItem from "./BreadcrumbItem.styled";
// import { useState } from "react";

const BreadcrumbItem = (props) => {
  // const [active, setActive] = useState(false);
  const { href, dispatch, name, state } = props;
  if (href && !state[name]) {
    return (
      <StyledBreadCrumbItem
        onClick={() => {
          dispatch({ type: name });
        }}
      >
        <a href={href}>{props.children}</a>
      </StyledBreadCrumbItem>
    );
  }
  return <StyledBreadCrumbItem>{props.children}</StyledBreadCrumbItem>;
};

export default BreadcrumbItem;
