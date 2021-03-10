import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="Header">
          <a href="/" className="HeaderText">
            <h1>JIN WON LEE</h1>
            <h2>Front-End Web Developer</h2>
          </a>
          <div className="HeaderNav">
            <a href="/projects">Projects</a>
            <a
              href="https://drive.google.com/file/d/0B1y6uL8TjW23YVRwSkNxRzhzYTJhNVlyVzZGbGtBdmtmVTNB/view?usp=sharing"
              download
            >
              Resume
            </a>
          </div>
        </header>
        <main className="Main">
          <div className="MainText">
            <h1>
              HELLO, I AM JIN.
              <br />
              I HAVE A PASSION FOR CODING
              <br />
              AND SOCCER.
            </h1>
            <p>
              I am a self-taught front-end web developer who strives to master
              JavaScript, React, HTML, CSS, and Python.
              <br />I am motivated by new challenges. Through the challenges, I
              enjoy learning something new and reinforcing the skills I already
              have. Eventually, I want to be an expert at what I do.
            </p>
          </div>
          <div className="MainImage">
            <img src="jin.jpeg" alt="Jin" className="JinImage" />
          </div>
        </main>
        <footer className="Footer">
          <div className="Icons">
            <a
              href="https://github.com/0125jinlee"
              target="_blank"
              rel="noreferrer"
              className="GithubIcon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/jin-won-lee-94731439/"
              target="_blank"
              rel="noreferrer"
              className="LinkedinIcon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/jin.won.lee/"
              target="_blank"
              rel="noreferrer"
              className="InstagramIcon"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a
              href="mailto: 0125jinwonlee@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="EmailIcon"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
