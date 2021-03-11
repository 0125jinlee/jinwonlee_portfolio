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
        <main>
          <div className="Main">
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
                <br />I like to be motivated by new challenges. I love learning
                something new and reinforcing the skills through overcoming the
                challenges.
              </p>
            </div>
            <div className="MainImage">
              <img src="jin.jpeg" alt="Jin" className="JinImage" />
            </div>
          </div>
          <div className="Projects">
            <div className="BetterWorld">
              <div className="Description">
                <a
                  href="https://betterworld-aac7e.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="Title"
                >
                  <h1>BetterWorld</h1>
                </a>
                <p>
                  BetterWorld will help one to find a charity that one might
                  like to make donations to.
                  <br />
                  The app handles the user authentication method, which an
                  authenticated user will be able to save favorite charities on
                  their 'My Page'.
                  <br />
                  From this project, I had the chance to build React/Redux app
                  from scratch along with in-depth practice on HTML, CSS, JSX,
                  and JavaScript.
                </p>
              </div>
              <div className="Images">
                <img src="betterworld_1.png" alt="betterworld_1" />
              </div>
            </div>
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
