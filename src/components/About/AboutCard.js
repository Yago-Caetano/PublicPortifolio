import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey There, I am <span className="purple">Yago Caetano</span>,
            IOT Developer and Student from{" "}
            <span className="purple"> FTT</span> - São Bernardo do Campo, Brazil.
            <br />
            <br />
            I have over 4 years of experience, during this period I had contact with:
          </p>
          <ul>

            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Mobile Applications
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Web Applications
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Blockchain Applications
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
