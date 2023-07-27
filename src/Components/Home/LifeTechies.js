import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Button } from "react-bootstrap";

const options = {
  margin: 10,
  responsiveClass: true,
  nav: true,
  dots: false,
  loop: true,
  autoplay: false,
  navText: [
    `<i class="fas fa-arrow-left"></i>`,
    `<i class="fas fa-arrow-right"></i>`,
  ],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

const LifeTechies = () => {
  return (
    <>
      <Container fluid id="tech-life">
        <Row>
          <Col>
            <div className="smile">
              <h2>Let’s Connect to discuss your Project 😀</h2>
            </div>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col id="content-cntr">
              <div className="tech-box">
                <h3>
                  Life At <span>Techies</span>
                </h3>
                <p>
                  We’re zealous in serving a multitude of industries. We’ve
                  rendered our expertise to the industry verticals for over a
                  decade and a half.
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col id="Slide">
              <div className="slidePic">
                <OwlCarousel {...options} nav id="pic-slides">
                  <div class="item">
                    <div className="imgDiv">
                      <img src="/images/slide22.png" />
                    </div>
                  </div>
                  <div class="item">
                    <div className="imgDiv">
                      <img src="/images/slide22.png" />
                    </div>
                  </div>
                  <div class="item">
                    <div className="imgDiv">
                      <img src="/images/slide22.png" />
                    </div>
                  </div>
                  <div class="item">
                    <div className="imgDiv">
                      <img src="/images/slide22.png" />
                    </div>
                  </div>
                  <div class="item">
                    <div className="imgDiv">
                      <img src="/images/slide22.png" />
                    </div>
                  </div>
                  <div class="item">
                    <div className="imgDiv">
                      <img src="/images/slide22.png" />
                    </div>
                  </div>
                </OwlCarousel>
              </div>
              <div className="slideBtn">
                <Button>Know More About Our Culture </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default LifeTechies;
