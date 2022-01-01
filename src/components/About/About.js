import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid"  style={{ width: "55%" }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Technical <strong className="purple">Skills </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-java-plain-wordmark" />
          <Techstack iconName="devicon-android-plain" />
          <Techstack iconName="devicon-embeddedc-plain" />
          <Techstack iconName="devicon-dotnetcore-plain" />
          <Techstack iconName="devicon-mysql-plain" />
          <Techstack iconName="devicon-html5-plain" />
          <Techstack iconName="devicon-css3-plain" />
          <Techstack iconName="devicon-cplusplus-plain" />
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-python-plain-wordmark " />
          <Techstack iconName="devicon-arduino-plain" />
          <Techstack iconName="devicon-git-plain-wordmark" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
