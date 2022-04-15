import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ThemeProvider } from "styled-components";

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";

const themeSettings = {
  alertPrimaryColor: "#004085",
  alertPrimaryBackgroundColor: "#cce5ff",
  alertPrimaryBorderColor: "#b8daff",
  alertSecondaryColor: "#383d41",
  alertSecondaryBackgroundColor: "#e2e3e5",
  alertSecondaryBorderColor: "#d6d8db",
  alertSuccessColor: "#155724",
  alertSuccessBackgroundColor: "#d4edda",
  alertSuccessBorderColor: "#c3e6cb",

  buttonBackgroundColorPrimary: "#007bff",
  buttonBorderColorPrimary: "#007bff",
  buttonHoverBackgroundColorPrimary: "#0069d9",
  buttonHoverBorderColorPrimary: "#0062cc",
  buttonBackgroundColorPrimaryActive: "#0062cc",
  buttonBorderColorPrimaryActive: "#005cbf",
  buttonHoverBackgroundColorPrimaryActive: "#0062cc",
  buttonHoverBorderColorPrimaryActive: "#005cbf",
  buttonBackgroundColorPrimaryDisabled: "#007bff",
  buttonBorderColorPrimaryDisabled: "#007bff",
  buttonHoverBackgroundColorPrimaryDisabled: "#007bff",
  buttonHoverBorderColorPrimaryDisabled: "#007bff;",

  buttonPaddingLg: ".5rem 1rem",
  buttonFontSizeLg: "1.25rem",
  buttonBorderRadiusLg: ".3rem",
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={themeSettings}>
        <Container fluid>
          <Row>
            <Col>
              <h2>Komponenty React Boostrap</h2>
            </Col>
            <Col>
              <h2>Komponenty Twoje</h2>
            </Col>
          </Row>
          <Task01 />
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
