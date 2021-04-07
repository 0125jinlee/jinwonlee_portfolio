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
          <br />
          Other than coding, I also want to be a better soccer player.
        </p>
      </div>
      <div className="MainImage">
        <img src="jin.jpeg" alt="Jin" className="JinImage" />
      </div>
    </div>
  );
};

export default Main;
