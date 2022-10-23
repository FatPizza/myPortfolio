import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMysql,
  SiVisualstudiocode,
  SiPostman,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

    </Row>
  );
}

export default Toolstack;
