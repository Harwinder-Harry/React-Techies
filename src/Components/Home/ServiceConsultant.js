import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServiceConsultant = () => {
  return (
    <>
      <Container fluid id="SC-box">
        <Container>
          <Row>
            <Col>
              <div className="SC-text">
                <h2>
                  Smooth business starts with <br />
                  good service consultant
                </h2>
                <p>
                  with consult we are prepared to guarantee your business <br />
                  advancement and increment business deals today.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="SC-img">
            <Col lg={6} md={6} sm={12} className="side-grp">
              <div className="grpPic-1">
                <p>
                  Unlock the potential of eCommerce with all the solutions that
                  make you standout.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="side-grp1">
              <div className="grpPic-2">
                <p>
                  We create beautiful purpose driven designs that prompt users
                  to take action.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="side-grp">
              <div className="grpPic-3">
                <p>
                  Unlock the potential of eCommerce with all the solutions that
                  make you standout.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="side-grp1">
              <div className="grpPic-4">
                <p>
                  We create beautiful purpose driven designs that prompt users
                  to take action.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default ServiceConsultant;
