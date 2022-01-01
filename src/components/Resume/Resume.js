import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/CV_ENGLISH.pdf";
import pdf_fr from "../../Assets/CV_FRENCH.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume EN-US
          </Button>
          &nbsp; &nbsp;
          <Button variant="primary" href={pdf_fr} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume PT-BR
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Software and Firmware Developer - Angoera Sistemas Eletrônico"
              date="July 2019 - Actually"
              content={[
                "Research and development of electronics and IOT projects",
                "Development of high-level applications, working with Android/Java, C++, Python and C#",
                "Development of solutions with embedded systems",
                "UX/UI design of the interfaces",,
                "Interconnecting the backend and the mobile app with APIs",
              ]}
            />
            <Resumecontent
              title="Electronics Technologist - A&C"
              date="April 2017 - July 2019"
              content={[
                "Preparation and execution of tests on electronic circuits and prototypes",
                "Performing activities related to product engineering",
                "Preparation of technical reports and operation manuals"
              ]}
            />
          
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Faculdade de Tecnologia Termomecânica"
              date="2019 - 2023"
              content={["B.Sc. in Computing Engineering "]}
            />
            <Resumecontent
              title="FATEC Adib Moisés Dib"
              date="2016 - 2019"
              content={["Associate degree, Industrial Automation"]}
            />
            <Resumecontent
              title="SENAI A. Jacob Lafer"
              date="2015 - 2016"
              content={["Certifacate Classes, Electronics"]}
            />
            <Resumecontent
              title="ETEC Lauro Gomes"
              date="2015 - 2016"
              content={["Certifacate Classes, Industrial Automation"]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Co-Founder of Andromeda Code"
              content={[
                "Development of IOT solutions",
                "Software development for businesses"
              ]}
            />
            <Resumecontent
              title="Freelance Video Editor"
              content={[
                "Video editing using Adobe Premiere, After Effects and Sony Vegas"
              ]}
            />

          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume EN-US
          </Button>
          &nbsp; &nbsp;
          <Button variant="primary" href={pdf_fr} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download Resume PT-BR
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
