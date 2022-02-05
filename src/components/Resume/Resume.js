import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,} from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import Particle from "../Particle";
function Resume() {
      <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        
         <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              Feel free to <span className="purple">Connect </span>with me
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://github.com/ankesai8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
           <li className="social-icons">
                <a
                  href="mailto:ankesai8@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://twitter.com/saiprasad_264"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
  
}

export default Resume;
