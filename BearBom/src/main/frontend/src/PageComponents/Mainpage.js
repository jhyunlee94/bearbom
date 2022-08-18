import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/mainpage.css";
const Mainpage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>1 of 3</Col>
          <Col style={{ textAlign: "center" }}>1 of 3</Col>
          <Col style={{ textAlign: "center" }}>1 of 3</Col>
        </Row>
      </Container>
    </>
  );
};

export default Mainpage;
