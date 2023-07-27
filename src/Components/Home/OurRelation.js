import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OurRelation = () => {
  return (
    <Container fluid id="OR-Box">
      <Container>
        <Row>
          <Col xl={3} md={12} sm={12}>
            <div className="line-text">Our Relationships</div>
          </Col>
          <Col xl={9} md={12} sm={12}>
            <div id="img-box">
              <div className="img-1">
                {" "}
                <img src="/images/pic-1.png" />
              </div>
              <div className="img-1">
                {" "}
                <img src="/images/pic-2.png" />
              </div>
              <div className="img-1">
                {" "}
                <img src="/images/pic-3.png" />
              </div>
              <div className="img-1">
                {" "}
                <img src="/images/pic-4.png" />
              </div>
              <div className="img-1">
                {" "}
                <img src="/images/pic-5.png" />
              </div>
              <div className="img-1">
                {" "}
                <img src="/images/pic-6.png" />
              </div>
              <div className="img-1">
                {" "}
                <img src="/images/pic-7.png" />
              </div>
              <div className="img-1">
                {" "}
                <img src="/images/pic-8.png" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default OurRelation;
