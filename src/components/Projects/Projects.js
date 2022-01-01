import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ftControl from "../../Assets/Projects/fitControl.png";
import trellisProject from "../../Assets/Projects/resmat.png";
import candyProject from "../../Assets/Projects/candystore.png";
import mqttProject from "../../Assets/Projects/mqtt_dotnet.jpg";


import devproductivity from "../../Assets/Projects/devproductivity.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Take a look at my  <strong className="purple">projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ftControl}
              isBlog={false}
              title="Fit Control"
              description="Java application for desktop developed in college to manage small gyms.
              Technologies: Java 11, JavaFX, Serial Communication, MySQL."
              link="https://github.com/Yago-Caetano/FitControl"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trellisProject}
              isBlog={false}
              title="Trellis Calculator"
              description="Pure Javascript and HTML application developed in college to calculate resistance and force of isostatic trellis"
              link="https://github.com/Yago-Caetano/projeto_resmat"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={candyProject}
              isBlog={false}
              title="Candy Store"
              description="A Candy store web site project developed using ReacT JS"
              link="https://github.com/Yago-Caetano/candystore"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mqttProject}
              isBlog={false}
              title="MQTT .NET CORE"
              description="A MQTT broker client project using .NET for backend and broker, and ESP32 for the client"
              link="https://github.com/Yago-Caetano/MQTT_NET_BACKEND"
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;

/*

<h1 className="project-heading">
          My <strong className="purple">Posts</strong> 
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my posts</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={devproductivity}
              link="https://www.instagram.com/p/CNDSdHaIv0e/"
              title="Can developer productivity be measured?"
              site=""
            />
          </Col>
        </Row>




*/