import React, { useState } from "react";
import StyledTabs from "./Tabs.styled";
import Tab from "./Tab";
import Sonnet from "./Sonnet";

const Tabs = () => {
  const [active, setActive] = useState("home");

  return (
    <StyledTabs>
      <Tab state={[active, setActive]} name={"home"}>
        Home
      </Tab>
      <Tab state={[active, setActive]} name={"profile"}>
        Profile
      </Tab>
      <Tab state={[active, setActive]} name={"contact"}>
        Contact
      </Tab>
      <Sonnet name={"home"} active={active}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
        dictum est. Cras accumsan tellus est, eu bibendum ligula consectetur
        non. Duis feugiat porta nibh a interdum. Nulla velit turpis, scelerisque
        non auctor vitae, eleifend quis turpis. Phasellus quis lacus quam.
      </Sonnet>
      <Sonnet name={"profile"} active={active}>
        Sed venenatis nunc et ex ullamcorper tincidunt. Sed eu viverra mauris.
        Sed faucibus odio ex, vitae luctus turpis condimentum sed. Duis vitae
        diam ex. Duis malesuada dolor ac ante luctus lacinia. Nulla ultrices ex
        turpis, in cursus diam finibus quis. Donec venenatis tristique laoreet.
        Vestibulum vitae ultricies odio, a vulputate lectus.
      </Sonnet>
      <Sonnet name={"contact"} active={active}>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Vivamus et euismod ipsum. Phasellus efficitur, ex quis
        lobortis pharetra, lacus urna iaculis magna, a vestibulum dolor quam in
        risus. Integer id condimentum sem. Duis sagittis quis arcu
      </Sonnet>
    </StyledTabs>
  );
};

export default Tabs;
