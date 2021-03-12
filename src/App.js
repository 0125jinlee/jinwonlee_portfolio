import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faChevronLeft,
  faChevronRight,
  faLink,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App = () => {
  const [imgNum, setImgNum] = useState(1);
  const [bwHovered, setBwHovered] = useState(false);
  const [tdHovered, setTdHovered] = useState(false);

  const leftBtnHandler = () => {
    if (imgNum === 1) {
      setImgNum(4);
    } else {
      setImgNum(imgNum - 1);
    }
  };

  const rightBtnHandler = () => {
    if (imgNum === 4) {
      setImgNum(1);
    } else {
      setImgNum(imgNum + 1);
    }
  };

  return (
    <div className="App">
      <div className="Container">
        <header className="Header">
          <a href="/" className="HeaderText">
            <h1>JIN WON LEE</h1>
            <h2>Front-End Web Developer</h2>
          </a>
          <div className="HeaderNav">
            <a
              href="mailto: 0125jinwonlee@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="EmailIcon"
            >
              EMAIL <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://drive.google.com/file/d/0B1y6uL8TjW23YVRwSkNxRzhzYTJhNVlyVzZGbGtBdmtmVTNB/view?usp=sharing"
              download
            >
              RESUME <FontAwesomeIcon icon={faFilePdf} />
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
                <br />I am motivated by new challenges. I love to learn
                something new and to reinforce the skills I have by overcoming
                new challenges.
              </p>
            </div>
            <div className="MainImage">
              <img src="jin.jpeg" alt="Jin" className="JinImage" />
            </div>
          </div>
          <div className="Projects">
            <h1 className="Title">MY WORKS</h1>
            <div className="BetterWorld">
              <div className="BwDesc">
                <a
                  href="https://betterworld-aac7e.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="LinkIcon" icon={faLink} />
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
              <div
                className="BwImages"
                onMouseEnter={() => setBwHovered(true)}
                onMouseLeave={() => setBwHovered(false)}
              >
                <button
                  className="LeftBtn"
                  onClick={leftBtnHandler}
                  style={bwHovered ? { opacity: 1 } : { opacity: 0 }}
                >
                  <FontAwesomeIcon
                    className="LeftBtnIcon"
                    icon={faChevronLeft}
                  />
                </button>
                <img
                  src={"betterworld_" + imgNum + ".png"}
                  alt={"betterworld_" + imgNum}
                />
                <button
                  className="RightBtn"
                  onClick={rightBtnHandler}
                  style={bwHovered ? { opacity: 1 } : { opacity: 0 }}
                >
                  <FontAwesomeIcon
                    className="RightBtnIcon"
                    icon={faChevronRight}
                  />
                </button>
              </div>
            </div>
            <div className="TodoList">
              <div className="TodoDesc">
                <a
                  href="https://5ofxt.csb.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon className="LinkIcon" icon={faLink} />
                  <h1>To Do List</h1>
                </a>
              </div>
              <div
                className="TodoImages"
                onMouseEnter={() => setTdHovered(true)}
                onMouseLeave={() => setTdHovered(false)}
              >
                <button
                  className="LeftBtn"
                  onClick={leftBtnHandler}
                  style={tdHovered ? { opacity: 1 } : { opacity: 0 }}
                >
                  <FontAwesomeIcon
                    className="LeftBtnIcon"
                    icon={faChevronLeft}
                  />
                </button>
                <img src={"todo_" + imgNum + ".png"} alt={"todo_" + imgNum} />
                <button
                  className="RightBtn"
                  onClick={rightBtnHandler}
                  style={tdHovered ? { opacity: 1 } : { opacity: 0 }}
                >
                  <FontAwesomeIcon
                    className="RightBtnIcon"
                    icon={faChevronRight}
                  />
                </button>
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
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
