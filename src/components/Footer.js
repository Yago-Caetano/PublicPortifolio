import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Yago Caetano</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/Yago-Caetano" style={{ color: "white" }}>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/yago-caetano-65a32613b/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:yago_caetano@outlook.com"
                style={{ color: "white" }}
              >
                  <i class="far fa-envelope"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;


/*


    <li className="social-icons">
              <a
                href="https://www.instagram.com/choubari_/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/choubari_"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://stackoverflow.com/users/12802591/choubari"
                style={{ color: "white" }}
              >
                <i className="fab fa-stack-overflow"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://dribbble.com/choubari"
                style={{ color: "white" }}
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.behance.net/choubari"
                style={{ color: "white" }}
              >
                <i className="fab fa-behance"></i>
              </a>
            </li>




*/
