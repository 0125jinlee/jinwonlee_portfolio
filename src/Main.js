import React from "react";

import "./Main.css";

const Main = () => {
  return (
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
          <br />I love to learn something new and to reinforce the skills I have
          by overcoming new challenges.
        </p>
      </div>
      <div className="MainImage">
        <img src="jin.jpeg" alt="Jin" className="JinImage" />
      </div>
    </div>
  );
};

export default Main;
