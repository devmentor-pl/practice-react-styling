import React from "react";

import { Row, Col, Tabs as RBTabs, Tab as RBTab } from "react-bootstrap";
import Tabs from "./../src/components/Tabs/Tabs";
import Tab from "./../src/components/Tabs/Tab";
import Sonnet from "./../src/components/Tabs/Sonnet";

const Task04 = () => {
  return (
    <Row>
      <Col>
        <RBTabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <RBTab eventKey="home" title="Home">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              condimentum lacus nec ligula faucibus rhoncus. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae;{" "}
            </p>
          </RBTab>
          <RBTab eventKey="profile" title="Profile">
            <p>
              Donec dignissim ultricies felis, eu dictum eros congue in. In
              gravida lobortis libero nec tempus. Cras rutrum nisl ut leo
              volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at,
              tincidunt eu lacus.
            </p>
          </RBTab>
          <RBTab eventKey="contact" title="Contact" disabled>
            <p>
              Vivamus metus nulla, fermentum eget placerat vitae, mollis
              interdum elit. Pellentesque arcu augue, vulputate ut porttitor ut,
              suscipit non orci. Integer justo odio, suscipit eget tortor nec,
              molestie lobortis eros. Nullam commodo elit sit amet lacus blandit
              aliquet. Mauris at nibh eget nisl pulvinar dignissim.
            </p>
          </RBTab>
        </RBTabs>
      </Col>
      <Col>
        <Tabs>
          <Tab name="home">
            <p>Home</p>
            <Sonnet name={"home"}>
              Vivamus metus nulla, fermentum eget placerat vitae, mollis
              interdum elit. Pellentesque arcu augue, vulputate ut porttitor ut,
              suscipit non orci. Integer justo odio, suscipit eget tortor nec,
            </Sonnet>
          </Tab>
          <Tab name="profile">
            <p>Profile</p>
            <Sonnet name={"profile"}>
              Donec dignissim ultricies felis, eu dictum eros congue in. In
              gravida lobortis libero nec tempus. Cras rutrum nisl ut leo
            </Sonnet>
          </Tab>
          <Tab name="contact">
            <p>Contact</p>
            <Sonnet name={"contact"}>
              molestie lobortis eros. Nullam commodo elit sit amet lacus blandit
              aliquet. Mauris at nibh eget nisl pulvinar dignissim.
            </Sonnet>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
};

export default Task04;
