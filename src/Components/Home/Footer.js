import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <>
      <Container fluid id="Footer">
        <Container>
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div id="foot-1">
                <div className="footLogo">
                  <img src="/images/logo-footer.png" />
                </div>
                <h3>
                  Techies Infotech is an integrated platform serving the entire
                  spectrum of digital marketing solutions from development and
                  design to IT consultation to ERP solutions across the globe.
                  We exemplify your business aspirations.
                </h3>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div id="foot-2">
                <div className="colLink1">
                  <h3>Our services</h3>
                  <ul>
                    <li>
                      <a href="#" />
                      Digital marketing
                    </li>
                    <li>
                      <a href="#" />
                      Web development
                    </li>
                    <li>
                      <a href="#" />
                      UI / UX design
                    </li>
                    <li>
                      <a href="#" />
                      SEO services
                    </li>
                    <li>
                      <a href="#" />
                      WooCommerce
                    </li>
                    <li>
                      <a href="#" />
                      Laravel codeigniter
                    </li>
                    <li>
                      <a href="#" />
                      Magento development
                    </li>
                    <li>
                      <a href="#" />
                      Pay per click
                    </li>
                    <li>
                      <a href="#" />
                      Shopify Development
                    </li>
                    <li>
                      <a href="#" />
                      Block Chain Development
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div id="foot-3">
                <div className="colLink2">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <a href="#" />
                      Careers
                    </li>
                    <li>
                      <a href="#" />
                      CSR Activities
                    </li>
                    <li>
                      <a href="#" />
                      About Deepdive Innovations
                    </li>
                    <li>
                      <a href="#" />
                      Privacy Policy
                    </li>
                    <li>
                      <a href="#" />
                      About
                    </li>
                    <li>
                      <a href="#" />
                      Contact
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div id="foot-4">
                <div className="colLink3">
                  <h3>Contact Us</h3>
                  <div className="locate1">
                    <div className="icon">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="text">
                      Plot No E331 Phase-8 B Industrial Area Mohali Miran Tower,
                      Fl 5, Sahibzada Ajit Singh Nagar, Punjab 160055
                    </div>
                  </div>
                  <div className="locate1">
                    <div className="icon">
                      <i class="fas fa-phone-alt"></i>
                    </div>
                    <div className="text">
                      <a href="tel:83605 56561">+91 83605 56561</a>
                      <a href="tel:83605 56561">,+91 83605 56561</a>
                    </div>
                  </div>
                  <div className="locate1">
                    <div className="icon">
                      <i class="far fa-envelope"></i>
                    </div>
                    <div className="text">
                      <a href="mailto:info@iamtechie.com">info@iamtechie.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
