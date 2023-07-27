import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const Youbest = () => {
  return (
    <>
      <Container fluid id="youbest">
        <Container>
          <Row>
            <Col>
              <div className="text-1">
                <p>
                  How We Can Assist <span>You Best?</span>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xxl={6} md={6} sm={12} className="sideb0x-1">
              <div className="bestBox-1">
                <div className="bestBox-text">
                  <h3>UI/UX Design</h3>
                  <p>
                    Lorem ipsum dolor sit ames, consectetur discing Elis. Nam
                    tempers.
                  </p>
                  <Button>Learn More →</Button>
                </div>
              </div>
            </Col>
            <Col xxl={6} md={6} sm={12}>
              <div className="bestBox-2 ">
                <div className="bestBox-text">
                  <h3>Full Stack Development</h3>
                  <p>
                    Lorem ipsum dolor sit ames, consectetur discing Elis. Nam.
                  </p>
                  <Button>Learn More →</Button>
                </div>
              </div>
            </Col>
            <Col xxl={6} md={6} sm={12} className="sideb0x-1">
              <div className="bestBox-3">
                <div className="bestBox-text">
                  <h3>Ecommerce</h3>
                  <p>
                    Lorem ipsum dolor sit ames, consectetur discing Elis. Nam
                    tempers.
                  </p>
                  <Button>Learn More →</Button>
                </div>
              </div>
            </Col>
            <Col xxl={6} md={6} sm={12}>
              <div className="bestBox-4">
                <div className="bestBox-text">
                  <h3>Metaverse</h3>
                  <p>
                    Lorem ipsum dolor sit ames, consectetur discing Elis. Nam
                    tempers.
                  </p>
                  <Button>Learn More →</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Youbest;
