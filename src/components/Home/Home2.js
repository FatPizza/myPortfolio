import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photoAva.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I felt that programming is a big part of my life when I started
              changing and modifing games. At that moment I knew What I am going to
              do for the rest of my life 🎮👾
              <br />
              <br />I am fluent in 
              <i>
                <b className="purple"> Java, Javascript, CSS and HTML. </b>
              </i>
              <br />
              <br />
              I am hoping to work with all sorts of &nbsp;
              <i>
                <b className="purple">Web Technologies</b> and
                also to devlope in an areas related to{" "}
                <b className="purple">
                  game development.
                </b>
              </i>
              <br />
              <br />
              On my free time, I develope on &nbsp;
              <b className="purple">Spigot</b> and
              <i>
                <b className="purple">
                  {" "}
                  new frameworks 
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Bukkit and Forge</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>YOU CAN FIND ME HERE !!!</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FatPizza"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="./asd"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  pointerEvents = "none"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/raanan-markind/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="asdfadsf"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
