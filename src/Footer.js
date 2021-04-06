import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
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
  );
};

export default Footer;
