import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import "./HomePage.css";

function TopHead() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className="import-text">
              <p>Important ! announcements will be displayed here ☺</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid id="nav-bar">
        <Container>
          <Row>
            <Col xl={9} sm={12}>
              <Navbar expand="lg">
                <Container>
                  <Navbar.Brand href="#">
                    <img src="/images/logo.png" alt="Hello" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-5">
                      <Nav.Link href="#">About </Nav.Link>
                      <Nav.Link href="#">Services</Nav.Link>
                      <Nav.Link href="#">Industries</Nav.Link>
                      <Nav.Link href="#">Our Work</Nav.Link>
                      <Nav.Link href="#">Case Studies</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
            <Col className="d-none d-lg-block" xl={3} lg={3}>
              <div className="side-btn">
                <div className="btn-1">
                  <Button>
                    <span>
                      <img src="/images/current.svg" />
                    </span>
                    We’re Hiring
                  </Button>
                </div>
                <div className="btn-2">
                  <Navbar expand="sm">
                    <Container>
                      <Nav className="me-auto">
                        <i class="fas fa-globe"></i>
                        <NavDropdown title="EN" id="basic-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">
                            Arabic
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">
                            German
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                        </NavDropdown>
                      </Nav>
                    </Container>
                  </Navbar>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default TopHead;
