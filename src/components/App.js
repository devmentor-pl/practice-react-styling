import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import themeSettings from "./Alert/Alert.theme";
import { ThemeProvider } from "styled-components";

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";

const App = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h2>Komponenty React Boostrap</h2>
          </Col>
          <Col>
            <h2>Komponenty Twoje</h2>
          </Col>
        </Row>
        <ThemeProvider theme={themeSettings}>
          <Task01 />
          <Task02 />
          <Task03 />
          <Task04 />
          <Task05 />
        </ThemeProvider>
      </Container>
    </>
  );
};

export default App;
