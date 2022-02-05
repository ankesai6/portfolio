import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";

import Type from "./Type";

import ResumePdf from "../../Assets/Resume.pdf";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ANKE SAIPRASAD</strong>
              </h1>

              <div style={{ textAlign: "left" }}>
                <Type />
              </div>
         
<Row style={{ justifyContent: "center", position: "relative"}}>
          <Button variant="primary" href={ResumePdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row>
        

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>


          </Row>
        </Container>
  
      </Container>
      
    </section>
  );
}

export default Home; 
