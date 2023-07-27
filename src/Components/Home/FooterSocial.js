import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const FooterSocial = () => {
  return (
    <>
      <Container fluid id="foot-menu">
        <Container>
          <Row>
            <Col lg={8} md={8} sm={4}>
              <Navbar>
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#home">Careers</Nav.Link>
                      <Nav.Link href="#home">Blog</Nav.Link>
                      <Nav.Link href="#home">Services</Nav.Link>
                      <Nav.Link href="#home">Privacy Policies</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
            <Col lg={4} md={4} sm={8} className="linksAlign">
              <div className="social-icons">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-linkedin-in"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default FooterSocial;
