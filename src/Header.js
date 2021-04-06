import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

const Header = () => {
  return (
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
          className="PdfIcon"
        >
          RESUME <FontAwesomeIcon icon={faFilePdf} />
        </a>
      </div>
    </header>
  );
};

export default Header;
