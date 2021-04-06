import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

import "./Project.css";

const Project = (props) => {
  const [imgNum, setImgNum] = useState(1);
  const [hovered, setHovered] = useState(false);

  const leftBtnHandler = () => {
    if (imgNum === 1) {
      setImgNum(4);
    } else {
      setImgNum(imgNum - 1);
    }
  };

  const rightBtnHandler = () => {
    if (imgNum === props.maxImgNum) {
      setImgNum(1);
    } else {
      setImgNum(imgNum + 1);
    }
  };

  return (
    <div
      className="Project"
      style={
        props.description
          ? { flexDirection: "row", alignItems: "center" }
          : { flexDirection: "column", alignItems: "flex-start" }
      }
    >
      <div className="Descriptions">
        <a href={props.link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="LinkIcon" icon={faLink} />
          <h1>{props.title}</h1>
        </a>
        <p>{props.description}</p>
      </div>
      <div
        className="Images"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          className="LeftBtn"
          onClick={leftBtnHandler}
          style={hovered ? { opacity: 1 } : { opacity: 0 }}
        >
          <FontAwesomeIcon className="LeftBtnIcon" icon={faChevronLeft} />
        </button>
        <img src={props.imgUrl + imgNum + ".png"} alt={props.imgUrl + imgNum} />
        <button
          className="RightBtn"
          onClick={rightBtnHandler}
          style={hovered ? { opacity: 1 } : { opacity: 0 }}
        >
          <FontAwesomeIcon className="RightBtnIcon" icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Project;
