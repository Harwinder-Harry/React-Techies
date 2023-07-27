import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  margin: 10,
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
const Feedback = () => {
  return (
    <>
      <Container fluid id="Case-box11">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="caseCol22">
                <p>Customer Feedback </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={10} sm={12}>
              <div className="top-lines1">
                <h2>
                  Excellent Service Obviously
                  <br /> Important <span>Feedback</span>.
                </h2>
              </div>
            </Col>
            <Col xl={2} sm={12}>
              <div className="view-line1">
                <p>View All Reviews →</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <div className="card-slides23">
                <OwlCarousel nav {...options}>
                  <div class="item">
                    <div className="feedback-card">
                      <div className="logo-star">
                        <div className="google">
                          <div className="googlPix">
                            <img src="/images/bannergrp1.png" />
                          </div>
                          <div>
                            <div className="strs">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="ranks">
                          <h3>4.7</h3>
                          <p>Reviews</p>
                        </div>
                      </div>
                      <div className="feedText">
                        <h2>Awesome Support</h2>
                        <p>
                          Everything from start to finish was easy peasy. very
                          happy with our choice to take our daughter to Brave
                          care. The entire team was great! Thank you!
                        </p>
                      </div>
                      <div className="custm">
                        <div className="custmPic">
                          <img src="/images/custmPic.png" />
                        </div>
                        <div className="feedback1">
                          <h3>Carla Wildner</h3>
                          <h4>Design at Mailchimp</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div className="feedback-card">
                      <div className="logo-star">
                        <div className="google">
                          <div className="googlPix">
                            <img src="/images/bannergrp1.png" />
                          </div>
                          <div>
                            <div className="strs">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="ranks">
                          <h3>4.7</h3>
                          <p>Reviews</p>
                        </div>
                      </div>
                      <div className="feedText">
                        <h2>“Seriously amazing!”</h2>
                        <p>
                          Everything from start to finish was easy peasy. very
                          happy with our choice to take our daughter to Brave
                          care. The entire team was great! Thank you!
                        </p>
                      </div>
                      <div className="custm">
                        <div className="custmPic">
                          <img src="/images/custmPic.png" />
                        </div>
                        <div className="feedback1">
                          <h3>Carla Wildner</h3>
                          <h4>Design at Mailchimp</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div className="feedback-card">
                      <div className="logo-star">
                        <div className="google">
                          <div className="googlPix">
                            <img src="/images/bannergrp1.png" />
                          </div>
                          <div>
                            <div className="strs">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="ranks">
                          <h3>4.7</h3>
                          <p>Reviews</p>
                        </div>
                      </div>
                      <div className="feedText">
                        <h2>“This office almost relaxing”</h2>
                        <p>
                          Everything from start to finish was easy peasy. very
                          happy with our choice to take our daughter to Brave
                          care. The entire team was great! Thank you!
                        </p>
                      </div>
                      <div className="custm">
                        <div className="custmPic">
                          <img src="/images/custmPic.png" />
                        </div>
                        <div className="feedback1">
                          <h3>Carla Wildner</h3>
                          <h4>Design at Mailchimp</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div className="feedback-card">
                      <div className="logo-star">
                        <div className="google">
                          <div className="googlPix">
                            <img src="/images/bannergrp1.png" />
                          </div>
                          <div>
                            <div className="strs">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="ranks">
                          <h3>4.7</h3>
                          <p>Reviews</p>
                        </div>
                      </div>
                      <div className="feedText">
                        <h2>Awesome Support</h2>
                        <p>
                          Everything from start to finish was easy peasy. very
                          happy with our choice to take our daughter to Brave
                          care. The entire team was great! Thank you!
                        </p>
                      </div>
                      <div className="custm">
                        <div className="custmPic">
                          <img src="/images/custmPic.png" />
                        </div>
                        <div className="feedback1">
                          <h3>Carla Wildner</h3>
                          <h4>Design at Mailchimp</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div className="feedback-card">
                      <div className="logo-star">
                        <div className="google">
                          <div className="googlPix">
                            <img src="/images/bannergrp1.png" />
                          </div>
                          <div>
                            <div className="strs">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="ranks">
                          <h3>4.7</h3>
                          <p>Reviews</p>
                        </div>
                      </div>
                      <div className="feedText">
                        <h2>“This office almost relaxing”</h2>
                        <p>
                          Everything from start to finish was easy peasy. very
                          happy with our choice to take our daughter to Brave
                          care. The entire team was great! Thank you!
                        </p>
                      </div>
                      <div className="custm">
                        <div className="custmPic">
                          <img src="/images/custmPic.png" />
                        </div>
                        <div className="feedback1">
                          <h3>Carla Wildner</h3>
                          <h4>Design at Mailchimp</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div className="feedback-card">
                      <div className="logo-star">
                        <div className="google">
                          <div className="googlPix">
                            <img src="/images/bannergrp1.png" />
                          </div>
                          <div>
                            <div className="strs">
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                              <i class="fas fa-star"></i>
                            </div>
                          </div>
                        </div>
                        <div className="ranks">
                          <h3>4.7</h3>
                          <p>Reviews</p>
                        </div>
                      </div>
                      <div className="feedText">
                        <h2>Awesome Support</h2>
                        <p>
                          Everything from start to finish was easy peasy. very
                          happy with our choice to take our daughter to Brave
                          care. The entire team was great! Thank you!
                        </p>
                      </div>
                      <div className="custm">
                        <div className="custmPic">
                          <img src="/images/custmPic.png" />
                        </div>
                        <div className="feedback1">
                          <h3>Carla Wildner</h3>
                          <h4>Design at Mailchimp</h4>
                        </div>
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

export default Feedback;
