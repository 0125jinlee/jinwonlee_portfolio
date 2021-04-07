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
      setImgNum(props.maxImgNum);
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
        props.description.length > 0
          ? { flexDirection: "row" }
          : { flexDirection: "column" }
      }
    >
      <div
        className="Descriptions"
        style={
          props.description.length > 0 ? { width: "45%" } : { width: "100%" }
        }
      >
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
        style={props.description > 0 ? { width: "550px" } : { width: "430px" }}
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
