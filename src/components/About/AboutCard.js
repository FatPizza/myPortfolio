import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Heyoo everyone 🤠 My name is <span className="purple">RAANAN MARKIND </span>
            and I am from <span className="purple">TEL-AVIV, ISRAEL.</span>
            <br /><br/> I am a full time learner, ready to discover new and intersecting
            technology so that I can make a diffrence to the people I love 🥰
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (Mincraft is the best 🐲)
            </li>
            <li className="about-activity">
              <ImPointRight /> Building plugins
            </li>
            <li className="about-activity">
              <ImPointRight /> Adventure with my best pal `{'>'}` 🐕‍🦺
            </li>
          </ul>
          <br/>
          <p style={{ color: "rgb(155 126 172)" }}>
            "I don't care who I lose anymore. As long as I don't lose myself again, I am good."{" "}
          </p>
          <footer className="blockquote-footer">anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
