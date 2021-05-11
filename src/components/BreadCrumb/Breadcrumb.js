import React, { useReducer } from "react";
import StyledBreadcrumb from "./Breadcrumb.styled";
import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb = (props) => {
  const initialState = {
    home: false,
    library: false,
    data: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "home":
        return { home: true, library: false, data: false };
      case "library":
        return { home: false, library: true, data: false };
      case "data":
        return { home: false, library: false, data: true };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <StyledBreadcrumb>
      <BreadcrumbItem
        state={state}
        name={"home"}
        href={"#"}
        dispatch={dispatch}
      >
        Home
      </BreadcrumbItem>{" "}
      /
      <BreadcrumbItem
        state={state}
        name={"library"}
        href={"#"}
        dispatch={dispatch}
      >
        {" "}
        Library
      </BreadcrumbItem>{" "}
      /
      <BreadcrumbItem state={state} name={"data"} dispatch={dispatch}>
        {" "}
        Data
      </BreadcrumbItem>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;
