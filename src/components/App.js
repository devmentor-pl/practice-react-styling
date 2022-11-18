import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ThemeProvider } from "styled-components";

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";

const themeAlertSettings = {
  colors: {
    colorAlfa: "#cfe2ff",
    colorBeta: "#e2e3e5",
    colorGamma: "#d1e7dd",
    colorDelta: "#f8d7da",
  },
};

const themeButtonSettings = {
  colors: {
    colorAlfa: "#007bff",
    colorBeta: "#6c757d",
    colorGamma: "#218838",
    colorDelta: "#ffc107",
  },
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={themeButtonSettings}>
        <Container fluid>
          <Row>
            <Col>
              <h2>Komponenty React Boostrap</h2>
            </Col>
            <Col>
              <h2>Komponenty Twoje</h2>
            </Col>
          </Row>
          <ThemeProvider theme={themeAlertSettings}>
            <Task01 />
          </ThemeProvider>
          <Task02 />
          <Task03 />
          <Task04 />
          <Task05 />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;