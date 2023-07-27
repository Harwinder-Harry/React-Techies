import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 13,
  responsiveClass: true,
  nav: true,
  dots: false,
  loop: true,
  autoplay: false,
  navText: [
    `<img src="/images/arrow1.png"/>`,
    `<img src="/images/arrow2.png"/>`,
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

const OurCaseStudy = () => {
  return (
    <>
      <Container fluid id="Case-box">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="caseCol1">
                <p>Our Case Studies </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={10} sm={12}>
              <div className="top-lines">
                <h2>
                  Don’t Just Deliver Digital Products. <br />
                  Give Your Customers Digital Experiences
                </h2>
              </div>
            </Col>
            <Col xl={2} sm={12}>
              <div className="view-line">
                <p>View All Case Studies →</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <div className="card-slides">
                <OwlCarousel nav {...options}>
                  <div class="item">
                    <div className="Card">
                      <div className="image-box">
                        <img src="/images/slideimg-1.png" />
                      </div>
                      <div className="slideCard-text">
                        <p>Web 3.0 Development</p>
                        <h2>
                          Expand & Evolve Your Business With Our Transformation
                          Platforms
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div className="Card">
                      <div className="image-box">
                        <img src="/images/slideimg-2.png" />
                      </div>
                      <div className="slideCard-text">
                        <p>UI/UX Designing</p>
                        <h2>
                          Expand & Evolve Your Business With Our Transformation
                          Platforms
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div className="Card">
                      <div className="image-box">
                        <img src="/images/slideimg-3.png" />
                      </div>
                      <div className="slideCard-text">
                        <p>Website Development</p>
                        <h2>
                          Expand & Evolve Your Business With Our Transformation
                          Platforms
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div className="Card">
                      <div className="image-box">
                        <img src="/images/slideimg-1.png" />
                      </div>
                      <div className="slideCard-text">
                        <p>Web 3.0 Development</p>
                        <h2>
                          Expand & Evolve Your Business With Our Transformation
                          Platforms
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div className="Card">
                      <div className="image-box">
                        <img src="/images/slideimg-2.png" />
                      </div>
                      <div className="slideCard-text">
                        <p>UI/UX Designing</p>
                        <h2>
                          Expand & Evolve Your Business With Our Transformation
                          Platforms
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div className="Card">
                      <div className="image-box">
                        <img src="/images/slideimg-3.png" />
                      </div>
                      <div className="slideCard-text">
                        <p>Website Development</p>
                        <h2>
                          Expand & Evolve Your Business With Our Transformation
                          Platforms
                        </h2>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default OurCaseStudy;
