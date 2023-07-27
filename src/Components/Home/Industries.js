import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const Industries = () => {
  return (
    <>
      <Container fluid id="industry">
        <Container>
          <Row>
            <Col>
              <div className="indust-box">
                <p>
                  Industries<span> We Serve </span>
                </p>
              </div>
              <h4>
                We’re zealous in serving a multitude of industries. We’ve
                rendered our
                <br /> expertise to the industry verticals for over a decade and
                a half.
              </h4>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="btngrp-1">
                <Button>Foodtech</Button>
                <Button>Fintech</Button>
                <Button>Healthtech</Button>
                <Button>Ai Bots</Button>
              </div>
              <div className="btngrp-2">
                <Button>Traveltech</Button>
                <Button>ECommerce</Button>
                <Button>Realtech</Button>
                <Button>Edtech</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Industries;
