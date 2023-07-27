import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const Forever21 = () => {
  return (
    <>
      <Container fluid id="forever">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="for-Box">
                <div>
                  <img src="/images/forever.png" />
                </div>
                <h3>
                  Leading fashion space that fits to win by bringing the
                  elements of style & clothes
                </h3>
                <div className="for-btns">
                  <Button>User Experience Design</Button>
                  <Button>Wireframing</Button>
                  <Button>User journey</Button>
                </div>
                <p>
                  Transforming the ideas into reality, we built a highly
                  functional web platform and unleashed its supreme potential
                  with the right SEO strategies.
                </p>

                <div className="links">
                  <h4>
                    Read Full Case Study{" "}
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </h4>

                  <h3>
                    SKIP <i class="fas fa-chevron-right"></i>
                  </h3>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="bigPic">
                <img src="/images/Group26.png" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Forever21;
