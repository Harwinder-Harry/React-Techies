import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CutomRate = () => {
  return (
    <>
      <Container fluid id="custom-box">
        <Container className="addWidth">
          <Row>
            <Col lg={3} md={3} sm={6}>
              <div className="rate-box1">
                <div className="icon">
                  <img src="/images/icon1.png" />
                </div>
                <h3>10+</h3>
                <p>Years of Experience</p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <div className="rate-box2">
                <div className="icon">
                  <img src="/images/icon2.png" />
                </div>
                <h3>100+</h3>
                <p>Happy Customers</p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <div className="rate-box3">
                <div className="icon">
                  <img src="/images/icon3.png" />
                </div>
                <h3>75+</h3>
                <p>Technology Experts</p>
              </div>
            </Col>
            <Col lg={3} md={3} sm={6}>
              <div className="rate-box4">
                <div className="icon">
                  <img src="/images/icon4.png" />
                </div>
                <h3>500+</h3>
                <p>Happy Customers</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default CutomRate;
