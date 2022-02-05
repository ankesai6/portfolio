import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import ResumePdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
        <Row className="resume">
           <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.Tech in Computer Science Engineering [SJCIT, Chickballapur, Banglore] "
              date="2016 - 2020"
              content={[`CGPA: 6.2`]}
            />
            <Resumecontent
              title="12th BOARD [Sri Chaitanya Junior College, Vijayawada]"
              date="2014 - 2016"
              content={["Percentage: 87.4%"]}
            />
            <Resumecontent
              title="10th BOARD [Prasad Concept School, Anantapur] "
              date="2014"
              content={[`CGPA: 8.8%`]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
