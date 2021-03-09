import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="Header">
          <div className="HeaderText">
            <h1>JIN WON LEE</h1>
            <h2>Front-End Web Developer</h2>
          </div>
          <div className="HeaderNav">
            <a href="/">Contact</a>
            <a href="/">Resume</a>
          </div>
        </header>
        <main className="Main">
          <div className="MainText">
            <h1>
              HELLO, I AM JIN.
              <br />
              I HAVE A PASSION FOR CODING,
              <br />
              AND SOCCER!
            </h1>
            <p>
              As I found my passion for coding throughout my career, I have been
              teaching myself JavaScript, React, HTML, and CSS focusing on
              front-end web development.
              <br />
              Under the idea to have as much practical experience as possible, I
              built my personal project called “Better World” and I also have
              been working on small JavaScript projects to expand my coding
              experience.
            </p>
          </div>
          <div className="MainImage">
            <img src="jin.jpeg" alt="Jin" className="JinImage" />
          </div>
        </main>
        <footer className="Footer"></footer>
      </div>
    </div>
  );
}

export default App;
