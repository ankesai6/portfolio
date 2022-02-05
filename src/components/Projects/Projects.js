import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import unichat from "../../Assets/Projects/unichat.png";
import bookxchanger from "../../Assets/Projects/bookxchanger.jpg";
import igt from "../../Assets/Projects/igt.jpg";
import mysuru from "../../Assets/Projects/mysuru.png";
import pollution from "../../Assets/Projects/pollution.png"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookxchanger}
              title="Online Book Store"
              description="Online-Book-Store is place where you can buy your favorite books. It is built using MERN stack and Redux with payment gateway integrated. It has all the major features like Admin Dashboard, Shopping Cart, Order etc..."
              link="https://book-store-9999.herokuapp.com/"
              link1="https://github.com/ankesai8/Online-Book-Store/tree/main/frontend"
              link2="https://github.com/ankesai8/Online-Book-Store/tree/main/backend"
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={igt}
              title="Online Music Player"
              description="Online Music Player is a real-time Web application  built with javascript and node.js and Bootstrap to make a Online Music application. A website where you can listen and enjoy songs, go through lyrics and create your own playlists and add your songs."
                  link="https://music-player-008.netlify.app/login"
                  link1="https://github.com/ankesai8/Music-Player-FrontEnd"
                  link2="https://github.com/ankesai8/Music-Player-BackEnd"
           />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unichat}
              title="Car Care"
              description="This is a real-time Web application build using React.js, node.js and Bootstrap .A Website help us to track the services provides to take care of your car at reasonable costs and afforabdable pricing for everyone .."
              link="https://carcare-90.netlify.app/"
              link1="https://github.com/ankesai8/Car-Care-FrontEnd"
              link2="https://github.com/ankesai8/Car-Care-BackEnd"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mysuru}
              title="Recipe mealDb"
              description="A Web Application which provide recipes to cook various dishes built using Node.js where a user can add, remove, update, and veiw recepies on youtube.."
              link="https://mealdb-9989.netlify.app/"
              link1="https://github.com/ankesai8/theMealDB-Recipe-Front-End"
              link2="https://github.com/ankesai8/theMealDB-Recipe-Back-End"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pollution}
              title="Weather-app"
              description="It is a  simple website  that fethes weather data fetching from the API and further climate of any city in the world."
              link1="https://github.com/ankesai8/Weather-app"
              link="https://weathertech-forecast-8.netlify.app/"
              link2="https://github.com/ankesai8/Weather-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
