import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              Enthusiastic about technologies, whether embedded systems, mobile apps and web apps, I'm a highly motivated person, dynamic, persevering and rigorous.
              <br />
              <br /> I'm{" "}
              <b className="purple">Software Engineering Student </b>
              at FTT, São Bernardo do Campo. My Graduation will be in 2023.
              <br />
              <br />

              I have over 4 years of experience with Embedded systems, electronic circuits, development of IOT projects and also development of products.
              <br/>
              <br/>

              I also have experiences with applications: 
                <ul>
                  <li>Mobile (Android Java and React Native)</li>
                  <li>Web (React Js)</li>
                  <li>Blockchain (Ethereum mainnet and Ropsten testnet)</li>
                </ul>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Yago-Caetano"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/yago-caetano-65a32613b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:yago_caetano@outlook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="far fa-envelope"></i>
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;


/*


                <li className="social-icons">
                <a
                  href="https://twitter.com/choubari_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>


                <li className="social-icons">
                <a
                  href="https://www.instagram.com/choubari_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>


                        <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>


*/