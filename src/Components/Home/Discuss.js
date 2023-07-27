import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const Discuss = () => {
  return (
    <>
      <Container fluid id="discuss">
        <Container>
          <Row>
            <Col lg={9} md={12} sm={12}>
              <div className="discussText">
                <div className="text">
                  <h3>
                    Don’t Just Deliver Digital Products. Give
                    <br /> Your Customers Digital Experiences
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg={3} md={12} sm={12} className="DisBtn1">
              <div id="btnDis">
                <Button>
                  Let’s Discuss <i class="fas fa-comments"></i>
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Discuss;
