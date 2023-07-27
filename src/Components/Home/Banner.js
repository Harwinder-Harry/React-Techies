import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

const Banner = () => {
  return (
    <Container fluid id="banner-main">
      <Container id="banner">
        <Row>
          <Col xl={6} sm={12}>
            <div id="banner-text">
              <h1>Design Technology Marketing</h1>
              <p>
                Empowering businesses globally by leveraging power of technology
                & human resources
              </p>
              <Button>
                Consult our Growth Advisors{" "}
                <span className="arrow">
                  <i class="fas fa-angle-right"></i>
                </span>
              </Button>

              <div id="banner-grp">
                <div className="grp-1">
                  <div className="grp-img">
                    <img src="/images/bannergrp1.png" />
                  </div>
                  <div className="star-set">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div className="text-1">
                    <p>150+ Reviews</p>
                  </div>
                </div>
                <div className="grp-1">
                  <div className="grp-img">
                    <img src="/images/bannergrp2.png" />
                  </div>
                  <div className="star-set">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div className="text-1">
                    <p>150+ Reviews</p>
                  </div>
                </div>
                <div className="grp-1">
                  <div className="grp-img">
                    <img src="/images/bannergrp3.png" />
                  </div>
                  <div className="star-set">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                  </div>
                  <div className="text-1">
                    <p>150+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} sm={12}>
            <div className="Bimage">
              <img src="/images/banner-img.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Banner;
