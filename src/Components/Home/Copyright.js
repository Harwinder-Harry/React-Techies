import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Copyright = () => {
  return (
    <Container fluid id="copyryt">
      <Container>
        <Row>
          <Col>
            <div className="copyright">
              <h3>
                Copyright 2022 - Techies Infotech. A Unit of Deepdive
                Innovations Pvt. Ltd.
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Copyright;
